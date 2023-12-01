import { storage } from "./manager";

export const makeTask = (pool) => {

        const newTask = {
            pool: pool.name,
            initialTimestamp: Date.now(),
            context: getContext(),
            movements : []
        };

        saveTask(newTask);
        return newTask;
 
};

const getContext = () => {
    const jsonData = require('./data.json');
    const jsonToObject = JSON.parse(jsonData);
    return jsonToObject;
}



export const saveTask = (task) => {
  
    if (task.movements.length >= 4) {
        // go to failed
    } else {
        localStorage.setItem("tasks", );
          task.movements.push({
        timestamp: Date.now(),
        });
    }
};
