import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import menuReducer from '../common/components/Menu/MenuReducer';
import appReducer from './AppReducer';


const combinedReducer = combineReducers({
  menu: menuReducer,
  routing: routerReducer,
  app: appReducer,
});
export default combinedReducer;
