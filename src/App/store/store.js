import { configureStore,combineReducers } from "@reduxjs/toolkit";
import listesReducer, { fetchAllListesValues } from "./memes";
import currentReducer from "./current";

export const store= configureStore({
    reducer:combineReducers({
        listes:listesReducer,
        current:currentReducer
    }),
    devTools:true
});

// execution dans le store les actions renvoyées par fetchAllListesValues
store.dispatch(fetchAllListesValues());