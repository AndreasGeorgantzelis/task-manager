import { handleNext } from "./manager";
import { registerPool } from "./manager";


export const test = () => {


    var pool = {};
    var task = {};


    pool = registerPool("test" + Date.now(), function () {
        return true;
    });



    //add payload to "test" queue
    pool.content = ("test", Date.now() * 3, "context");
    console.log(pool);

    let handledTask = handleNext();
    
}
