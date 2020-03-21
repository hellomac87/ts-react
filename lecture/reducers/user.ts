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
  switch (action.type) {
    case LOG_IN_REQUEST:
    case LOG_IN_SUCCESS:
    case LOG_IN_FAILURE:
    case LOG_OUT:
      return {
        ...prevState,
        data: null
      };
    default:
      return prevState;
  }
};

export default userReducer;
