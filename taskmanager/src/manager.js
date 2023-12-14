
import { constructInit } from './task';
import { unAck } from './adapter';
import { ack } from './adapter';
import { handler } from './handler';
import { save } from './adapter';
import { get } from './adapter';
import { getPoolHandler } from './pool';
import { queues } from './test';





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

    //TODO : HANDLER DOESNT GO THROUGH LOCAL STORAGE FIND ANOTHER WAY TO FIND QUEUES
    //TODO : MAKE TIDE.JS
    //TODO : MAKE REQUEUE
    //TODO : MAKE CONDITION FOR FAILED TASKS 

    
  
    let queue = queues;

    // console.log(queue);

    if (queue) {
        var task = get();
        if (task) {;
            // handle(task,queue);
            console.log('task to be handled : ', task);
        }

    } else {
        console.log("queue was not found");
        return null;
    }
 
        

};

const handle = (task, queue) => {

    console.log(queue);
    // restoreFailed(pool);
    const handler = queue.handler;
    if (task) {

        if (handler(task)) {
            ack(task);
            console.log("done")
        } else {
            unAck(task);
        }
    }

    return task;
};




