import { createStore, combineReducers } from "redux";
import numerosReducer from "./reducers/numerosReducer";


const reducers = combineReducers({
    numeros: numerosReducer,
})


function storeConfigs() {
    return createStore(reducers)
}

export default storeConfigs