import { combineReducers, createStore } from "redux";
import { reducer as formReducer } from 'redux-form'
import navReducer from "./nav-reducer";

let reducers = combineReducers({
    nav: navReducer,
    form: formReducer
});

let store = createStore(reducers);
window.store = store
export default store