import { handler } from "./handler";

export var queues = [];


export const registerPool = (name, handler) => {
       if (!queues[name]) {
        queues[name] = [];
    }
    
    queues[name] = getPool(name, handler);
    queues.push(queues[name])

    return queues[name];


}

export const getPool = (name, handler) => {
   return createPool(name,handler); 
};
  

const createPool = (name, handler) => {
     
    if (typeof (handler) != "function") {
        console.log("You must give a handler!")
        return null
    }

    var pool = {
        name: name,
        handler: handler,
        content: ''
    }

    return pool;
 };

// const getPoolName = () => {
//      return poolName = Math.random * Date.now()
// }
 
export const getPoolHandler = () => {
    return handler();
 }





