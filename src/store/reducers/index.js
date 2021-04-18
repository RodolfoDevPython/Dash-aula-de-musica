import { combineReducers } from 'redux'

import chooseModulo from "./modulos";
import boxAction from "./BoxActions";

export default combineReducers({
    chooseModulo,
    boxAction
})