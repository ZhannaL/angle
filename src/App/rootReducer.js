import { combineReducers } from "redux";
import menuReducer from '../common/components/Menu/MenuReducer'

const combinedReducer = combineReducers({
    menu:menuReducer
});
export default combinedReducer
