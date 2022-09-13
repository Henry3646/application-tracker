import { combineReducers } from "redux";
import apps from './apps'
import auth from './auth'

export default combineReducers({ apps, auth })