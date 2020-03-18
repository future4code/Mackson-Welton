import { combineReducers } from "redux";
import markTask from "./markTask";
import newTasks from './newTasks';

const rootReducer = combineReducers({
  markTask: markTask,
  newTasks: newTasks
});

export default rootReducer;