import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import bagReducerDuck from "./reducers/bagReducerDuck"
import movieReducerDuck from "./reducers/movieReducerDuck"



const rootReducer = combineReducers({
	bag: bagReducerDuck,
	movie:movieReducerDuck
})


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store