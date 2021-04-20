import { combineReducers } from "redux";
//здесь идут default exports из файлов
import auth from "./auth";
import users from "./users";
import followers from "./followers";
import network from "./network";

//а здесь идут именованные экспорты из каждого файла
export { getIsAuthorized, authorize, logout } from "./auth";

export {
  userRequest,
  userSuccess,
  userFailure,
  getIsFetching,
  getIsFetched,
  getData,
  getError,
} from "./users";

export {
  followersRequest,
  followersSuccess,
  followersFailure,
  getFollowersIsFetching,
  getFollowersIsFetched,
  getFollowersId,
  getFollowersError,
} from "./followers";

export {
  getIsNetworkErrorPresent,
  getMessage,
  clearNetworkErrors,
  networkError,
} from "./network";

//собираем большой редусер из маленьких редусят
export default combineReducers({
  auth,
  users,
  followers,
  network,
});
