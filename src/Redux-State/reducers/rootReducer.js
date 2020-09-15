import MovieReducer from "./MovieReducer";
const { combineReducers } = require("redux");

const rootReducer = combineReducers({MovieReducer});
export default rootReducer;