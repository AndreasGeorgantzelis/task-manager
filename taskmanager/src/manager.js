import { getPool } from './pool'
import { makeTask } from './task';
import { handler } from './handler';

export var storage = [];
export var get = [];
export var succes = [];
export var failed = [];

handleNext();

const handleNext = () => {
    const pool = getPool();

    if (!pool) {
        console.log("pool is empty!")
        return null;
    } else {
        handle(pool);
    }
};

const handle = (pool) => {
    // restoreFailed(pool);
    const task = makeTask(pool);

    if (task) {

        if (handler(task)) {
            ack(task);
            return task;
        }

        unAck(task);
    }

    return null;
};





const getFirstFilename = (path, sort = "TIME_ASC") => {
    const allowedSorts = ["TIME_ASC", "TIME_DESC", "FILENAME_ASC"];

    if (!allowedSorts.includes(sort)) {
        throw new Error(`Invalid sort flag: ${sort}`);
    }

    const files = fs.readdirSync(path);
    let sortCallback;

    switch (sort) {
        case "TIME_ASC":
            sortCallback = (a, b) => fs.statSync(`${path}/${a}`).mtime - fs.statSync(`${path}/${b}`).mtime;
            break;
        case "TIME_DESC":
            sortCallback = (a, b) => fs.statSync(`${path}/${b}`).mtime - fs.statSync(`${path}/${a}`).mtime;
            break;
        case "FILENAME_ASC":
            sortCallback = (a, b) => a.localeCompare(b);
            break;
    }

    files.sort(sortCallback);
    const firstFilename = files[0];

    return firstFilename !== undefined ? firstFilename : null;
};



const ack = (task) => {
    const taskPoolGetFilePath = getTaskPoolGetFilePath(task);

    if (fs.existsSync(taskPoolGetFilePath)) {
        fs.unlinkSync(taskPoolGetFilePath);
    }
};

const unAck = (task) => {
    saveTask(task, COPY_TASK_GET, COPY_TASK_POOL);
};

const save = (task) => {
    const taskPoolFilePath = getTaskPoolFilePath(task);
    const content = JSON.stringify({
        pool: task.pool,
        context: task.context,
    }, null, 2);

    // TODO: Decide if content can be overridden. Now it does
    fs.writeFileSync(taskPoolFilePath, content);

    return true;
};


//     validateContext,
//     generateUuidForTask,
//     copyTask,
//     getTaskPoolFilePath,
//     getPoolTasksPath,
//     getTasksPath,
//     getPath,
//     setPath,
//     getTaskPoolGetFilePath,
//     getPoolGetTasksPath,
//     getTaskPoolFailedFilePath,
//     getPoolFailedTasksPath,
//     handleNext,
//     getNextPool,
//     handle,
//     restoreFailed,
//     getFirstFilename,
//     getNextTask,
//     ack,
//     unAck,
//     save,
// };
