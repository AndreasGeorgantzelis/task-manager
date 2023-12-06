
import { constructInit } from './task';
import { unAck } from './adapter';
import { handler } from './handler';
import { save } from './adapter';
import { get } from './adapter';
import { queues } from './pool';



export const validateTask = (queue,data) => {
    publish(queue, data);
}


export const publish = (queue, data) => {
  if (!(queues[queue] || false)) {
    console.log( "Wrong Queue!")
  }
  
  var id = "task" + Date.now() * 2

  var task = constructInit(id, queue, data);
  save(queue,task); //save task to queue

  return task;
}





// handling
export const handleNext = () => {
  

    let queue = null;
    if (queues) {
        queue = queues[0];
    }

    if (queue) {
        queue = queues[queue];
        get(queue);
    } else {
        return null;
    }
    // the code above, checks if there is a queue already registered, if there is it moves on
    // with handling the queue, if there isnt it registers a queue.
        
    return 1;

};

const handle = (pool) => {
    // restoreFailed(pool);
    const handler = pool.handler

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
    // trackMovements(parsedTask);
    console.log(parsedTask)
    success.push(parsedTask);
    // localStorage.removeItem("task" + task.initialTimestamp);

};

