

  const STATE_NAME_NULL = "null";
  const QUEUE = "queue";
  const GET = "get";
  const ACK = "ack";
  const NACK = "nack";
  const FAIL = "fail";
  const STATE_NAME_INIT = "init";
  const STATE_NAME_REQUEUE = "requeue";
  const VALID_TRANSITIONS = {
    [STATE_NAME_NULL]: [QUEUE],
    [QUEUE]: [GET],
    [GET]: [ACK, NACK],
    [NACK]: [QUEUE, FAIL],
  };



export const getState = (state, to) => {
    
  console.log(state, to);
    // validate(from, to);

    return {
      from:state.name,
      to: to,
      name: getName(state.name),
      timestamp: getTimestamp(state),
    
    };
  };

  //   const validate = (from, to) => {
  //   const validFrom = [STATE_NAME_NULL, QUEUE, GET, ACK, NACK];

  //   if (!validFrom.includes(from)) {
  //     throw new Error(`Invalid \`from\`: '${from}'`);
  //   }

  //   if (!VALID_TRANSITIONS[from].includes(to)) {
  //     throw new Error(`Invalid \`to\` when \`from\` is '${from}': '${to}'`);
  //   }
  // };

  

const getName = (state) => {

  if (state === "null") return QUEUE;
  if (state === "queue") return GET;
  if (state === "get") return ACK;
  if (state === "nack") return QUEUE;
  //more transitions!!
};
  



const getTimestamp = () => { return Date.now() };

