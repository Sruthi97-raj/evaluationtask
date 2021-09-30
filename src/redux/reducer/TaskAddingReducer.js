const initialState = { taskuser: null }

function actionDetails(state = initialState, action) {


    console.log("data from reducer", action.payload, action.type)
    console.log("data from type", action.type)
    switch (action.type) {

        case "ADD_TASK":

            return Object.assign({}, state, {
                taskuser: action.payload


            });


        default:
            return state;
    }

};


export default actionDetails;