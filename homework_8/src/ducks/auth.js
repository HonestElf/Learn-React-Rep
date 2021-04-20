import { handleActions, createActions } from "redux-actions";
import { combineReducers } from "redux";

//создаем редусеры
export const { authorize, logout } = createActions("AUTHORIZE", "LOGOUT");

const isAuthorized = handleActions(
  {
    [authorize]: () => true,
    [logout]: () => false,
  },
  false
);
//сделаем геттер для защиты
export const getIsAuthorized = (state) => state.auth.isAuthorized;
//экспорт редусера по умолчанию
export default combineReducers({ isAuthorized });
