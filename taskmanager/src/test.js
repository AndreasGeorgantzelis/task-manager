import { handleNext } from "./manager";
import { registerPool } from "./pool";
import { validateTask } from "./manager";
import { get } from "./adapter";

export let queues = [];


export const test = () => {

    var pool = {};

    pool = registerPool("test" + Date.now(),function () {
        const randomNumber = Math.random();
         // Return true one-third of the time
        //  return randomNumber < 1 / 3;
        return true;
    });

    //add payload to "test" queue
    pool.content = ("test", Date.now() * 3, "context");

    validateTask(pool.name, pool.content);
    

    queues = pool;
    
}



export const handleNextTask = () => {
    handleNext();
}
