
export const getPool = () => {
    var pool = createPool();
    if (!Object.keys(pool).length) {
        return null;
    } else { return pool }

    // const poolsIndex = Math.floor(Math.random() * Object.keys(pools).length);
    // const pools = Object.keys(pools);
    // const key = pools[poolsIndex];

 
};
  

 const createPool = () => {

    var poolName = Math.random * Date.now()


    var pool = {
        name: poolName,
        
    }

    return pool;
};



// Example usage:
const myPool = createPool(someFunction);

