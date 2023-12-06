import { storage } from "./manager";

export const makeTask = (pool) => {

        const newTask = {
            pool: pool.name,
            initialTimestamp: Date.now(),
            context: pool.content,
            movements : []
        };

        saveTask(newTask);
        return newTask;
 
};


export const saveTask = (task) => {
  
    if (task.movements.length >= 4) {
        // go to failed
    } else {
        localStorage.setItem("task"+task.initialTimestamp, JSON.stringify(task));
        trackMovements(task);
    }
};

export const trackMovements = (task) => {
      task.movements.push({
        timestamp: Date.now(),
      });
}
