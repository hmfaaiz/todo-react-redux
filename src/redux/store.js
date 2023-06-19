import { createStore, combineReducers }  from "redux";
import todoReducer from "./reducer/todoReducer"

const rootReducer = combineReducers({todos: todoReducer, })
const store = createStore(rootReducer)
export default store


// import { createStore, combineReducers } from "redux";
// import todoReducer from "./reducer/todoReducer";

// const rootReducer = combineReducers({ todo: todoReducer });
// const store = createStore(rootReducer);

// export default store;
