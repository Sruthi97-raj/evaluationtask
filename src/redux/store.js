import { createStore, combineReducers } from "redux";
import  actionDetails from '../redux/reducer/TaskAddingReducer'
 
const appReducers = combineReducers(
    {
       
       actionDetails
       
    }
);

const store = createStore(appReducers);

export default store;