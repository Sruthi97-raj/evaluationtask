export const TaskAdding = (payload) => {
    console.log("action", payload)
  
    return {
        type: "ADD_TASK",
        payload: payload
    }
    

}