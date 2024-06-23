import { createStore, combineReducers } from "redux";
import reducerShopping from "./reducer/reducerShopping";
import reducerCarts from "./reducer/reducerCarts";

const rootReducer = combineReducers({
  reducerShopping,
  reducerCarts,
});

const store = createStore(rootReducer);

export default store;
