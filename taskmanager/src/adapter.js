import { getState } from "./state";


export const save = (queue, task) => {
    if (!task) {
        console.log("task wasnt found");
        return null
    }
    if (task.state.length >= 4) {
       console.log("failed")
    } else {

        var tasks = localStorage.getItem("tasks");
    
        if (tasks) {

            var parsedTasks = JSON.parse(tasks) || [];
            task.state.push(getState(task.state, "queue"));
            parsedTasks.push(task);
            localStorage.setItem("tasks", JSON.stringify(parsedTasks));

        }
        else {
            console.log("queue is empty!")
        }
  
    }
   
};

export const get = () => {

    var oldestTask = getOldestFromQueue("tasks");
    if (oldestTask) {
        oldestTask.state.push(getState(oldestTask.state, "get"));
        localStorage.setItem("get", JSON.stringify(oldestTask));
        return oldestTask
    }

}

export const getOldestFromQueue = (queue) => {

    var tasks = JSON.parse(localStorage.getItem(queue));
    
    console.log(tasks);

    if (tasks) {
            var oldestTask = dequeue(tasks, queue);
            return oldestTask;
        }
       
}

export const dequeue = (tasks,queue) => {

    var oldestTask = tasks.shift();
    localStorage.setItem(queue, JSON.stringify(tasks))

    return oldestTask;

}

export const unAck = (task) => {
    requeque(task);
}

export const ack = () => {

     var ackTask = getOldestFromQueue("get");

     var success = localStorage.getItem("success");
    
        if (success) {
            var parsedSuccess = JSON.parse(success) || [];

             ackTask.state.push(getState(ackTask.state, "ack"));
             console.log(ackTask.id + " was handled\n");
            
            parsedSuccess.push(ackTask);
            localStorage.setItem("success", JSON.stringify(parsedSuccess));
        }

}

export const requeque = (task) => {
    save(task);
}

export const failed = (task) => {
        localStorage.setItem("task"+task.initialTimestamp, JSON.stringify(task));
}

