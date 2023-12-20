export const tideQueue = () => {

    const timerId = setTimeout(() => {
        console.log("Item in the queue hasn't been processed within 1 second!");
        return true;
    }, 1000);



    clearTimeout(timerId);
 
}


