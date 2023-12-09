import { getState } from "./state";


export const save = (queue, task) => {
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

export const get = (queue) => {
    var oldestTask = getOldestFromQueue(queue);
    // console.log(oldestTask.state)
    oldestTask.state.push(getState(oldestTask.state, "get"));
    localStorage.setItem("get", JSON.stringify(oldestTask));

}

export const getOldestFromQueue = () => {
    var tasks = localStorage.getItem("tasks");
    var parsedTasks = JSON.parse(tasks) || [];
    // console.log(parsedTasks);

    var oldestTask = parsedTasks[0]

    dequeue(parsedTasks);

    return oldestTask;
}

export const dequeue = (parsedTasks) => {
    // console.log(parsedTasks.shift())
    parsedTasks.shift();
    localStorage.setItem("tasks", JSON.stringify(parsedTasks))
}

export const unAck = (task) => {
    requeque(task);
}

export const requeque = (task) => {
    save(task);
}

export const failed = (task) => {
        localStorage.setItem("task"+task.initialTimestamp, JSON.stringify(task));
}

