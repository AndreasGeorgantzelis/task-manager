import { handleNext } from "./manager";
import { registerPool } from "./pool";
import { validateTask } from "./manager";
import { get } from "./adapter";



export const test = () => {


    var pool = {};
    var task = {};


    pool = registerPool("test" + Date.now(), function () {
        return true;
    });

    //add payload to "test" queue
    pool.content = ("test", Date.now() * 3, "context");

    validateTask(pool.name, pool.content);
   
    
    
}

export const handleNextTask = () => {
    handleNext();
}
