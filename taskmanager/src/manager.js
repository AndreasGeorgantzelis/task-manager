import { getPool } from './pool'
import { makeTask, saveTask } from './task';
import { handler } from './handler';
import { getPoolHandler } from './pool';
import { trackMovements } from './task';


//set up local storage array
export var storage = [];
localStorage.setItem("tasks", storage);
export var get = [];
export var success = [];
export var failed = [];


export var queues = [];


export const registerPool = (name, handler) => {
    queues[name] = getPool(name, handler)

    return queues[name];


}




// handling
export const handleNext = () => {

    let queue = null;
    if (Object.keys(queues).length > 0) {
    const randomIndex = Math.floor(Math.random() * queues.length);
    queue = queues[randomIndex];
    }

    if (queue) {
         queue = queues[queue];
    } else {
          queue = registerPool("test" + Date.now(), function() {
			return true;
		});
    }
    // the code above, checks if there is a queue already registered, if there is it moves on
    // with handling the queue, if there isnt it registers a queue.
        
    handle(queue);

};

const handle = (pool) => {
    // restoreFailed(pool);
    const handler = pool.handler
    const task = makeTask(pool);

    if (task) {

        if (handler(task)) {
            ack(task);
        } else {
            unAck(task);
        }
    }

    return task;
};


const ack = (task) => {

    //todo clean up this


    let ackTask = localStorage.getItem("task" + task.initialTimestamp)
    let parsedTask = JSON.parse(ackTask);
    trackMovements(parsedTask);
    console.log(parsedTask)
    success.push(parsedTask);
    // localStorage.removeItem("task" + task.initialTimestamp);

};

const unAck = (task) => {

    //todo check this 
    // make it work with task.movement >= 4

    trackMovements(task);
    saveTask(task);
};
