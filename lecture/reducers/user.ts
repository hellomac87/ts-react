import { produce } from "immer";
import {
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  LogInRequestAction,
  LogInSuccessAction,
  LogInFailureAction,
  LOG_OUT,
  LogOutAction
} from "../actions/user";
export interface UserState {
  isLogingIn: boolean;
  data: {
    nickname: string;
  } | null;
}
const initialState: UserState = {
  isLogingIn: false,
  data: null
};
type UserReducerActions =
  | LogInRequestAction
  | LogInSuccessAction
  | LogInFailureAction
  | LogOutAction;
const userReducer = (prevState = initialState, action: UserReducerActions) => {
  return produce(prevState, draft => {
    switch (action.type) {
      case LOG_IN_REQUEST:
        draft.data = null;
        draft.isLogingIn = true;
        break;
      case LOG_IN_SUCCESS:
        draft.data = action.data;
        draft.isLogingIn = false;
        break;
      case LOG_IN_FAILURE:
        draft.data = null;
        draft.isLogingIn = true;
        break;
      case LOG_OUT:
        draft.data = null;
        break;
      default:
        break;
    }
  });
};

export default userReducer;
