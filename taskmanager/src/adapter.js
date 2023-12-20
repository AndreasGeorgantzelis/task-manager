import { getState } from "./state";


export const save = (queue, task) => {
    if (!task) {
        console.log("task wasnt found");
        return null
    }
    console.log(task);

        var tasks = localStorage.getItem("tasks");
    
        if (tasks) {

            var parsedTasks = JSON.parse(tasks) || [];
            task.state.push(getState(task.state, "queue"));
            parsedTasks.push(task);
          
            localStorage.setItem("tasks", JSON.stringify(parsedTasks));

        }
        else {
            console.log("queue is empty!");
        }

   
};

export const get = () => {

    var oldestTask = getOldestFromQueue("tasks", true);

    if (oldestTask) {
        oldestTask.state.push(getState(oldestTask.state, "get"));
        localStorage.setItem("get", JSON.stringify(oldestTask));
        return oldestTask;
    }

}

export const getOldestFromQueue = (queue,bool) => {

    var tasks = JSON.parse(localStorage.getItem(queue));
    
    // console.log(tasks);

    if (tasks) {
            var oldestTask = dequeue(tasks, queue,bool);
            return oldestTask;
        }
       
}

export const dequeue = (tasks, queue, bool) => {
 
    if (bool) {
        var oldestTask = tasks.shift();
        localStorage.setItem(queue, JSON.stringify(tasks))
        return oldestTask;
    } else {
        return tasks.shift();
    }

}

export const unAck = () => {

    var unAckTask = JSON.parse(localStorage.getItem("get"));
    

    unAckTask.requeue++;

    console.log(unAckTask.requeue);
    if (unAckTask.requeue > 1) {
        failed(unAckTask);
        console.log("failed");
    } else {
        requeque(unAckTask);
    }
   
}

export const ack = () => {


    var ackTask = JSON.parse(localStorage.getItem("get"));
    localStorage.setItem("get", JSON.stringify(getOldestFromQueue("tasks", false)));

    var success = JSON.parse(localStorage.getItem("success"));
    success.push(ackTask);

    localStorage.setItem("success", JSON.stringify(success));

}

export const requeque = (task) => {
    task.state.push(getState(task.state,"requeue"));
    var tasks = JSON.parse(localStorage.getItem("tasks"));
    console.log(tasks);
    tasks.push(task);
    localStorage.setItem("tasks",JSON.stringify(tasks));
    localStorage.setItem("get", JSON.stringify(getOldestFromQueue("tasks", false)));
}

export const failed = (task) => {
    var failedTasks = JSON.parse(localStorage.getItem("failed"));
    failedTasks.push(task);
    localStorage.setItem("failed", JSON.stringify(failedTasks));
    localStorage.setItem("get", JSON.stringify(getOldestFromQueue("tasks" ,false)));
}