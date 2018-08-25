import { combineReducers } from "redux";
import menuReducer from '../common/components/Menu/MenuReducer'
import appReducer from './AppReducer'
import { routerReducer } from 'react-router-redux'

const combinedReducer = combineReducers({
    menu: menuReducer,
	routing: routerReducer,
	app: appReducer
});
export default combinedReducer
