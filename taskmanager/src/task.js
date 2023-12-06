
export const constructInit = (id,queue,data) => {

  const newTask = {
            id : id,
            pool: queue.name,
            initialTimestamp: Date.now(),
            context: data,
            state: {
                from:"",
                to: "",
                name: "null",
                timestamp: Date.now(),
            },
        };

     
        return newTask;
 
};


