import { AnyAction } from "redux";
import { addPost } from "./post";

export const LOG_IN_REQUEST = "LOG_IN_REQUEST" as const;
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS" as const;
export const LOG_IN_FAILURE = "LOG_IN_FAILURE" as const;

export const LOG_OUT = "LOG_OUT";

export interface LogInRequestAction {
  type: typeof LOG_IN_REQUEST;
  data: { id: string; password: string };
}

export const loginRequest = (data: {
  id: string;
  password: string;
}): LogInRequestAction => {
  return {
    type: LOG_IN_REQUEST,
    data
  };
};

export interface LogInSuccessAction {
  type: typeof LOG_IN_SUCCESS;
  data: { userId: number; nickname: string };
}

export const loginSuccess = (data: {
  userId: number;
  nickname: string;
}): LogInSuccessAction => {
  return {
    type: LOG_IN_SUCCESS,
    data
  };
};

export interface LogInFailureAction {
  type: typeof LOG_IN_FAILURE;
  error: Error;
}

export const loginFailure = (error: Error): LogInFailureAction => {
  return {
    type: LOG_IN_FAILURE,
    error
  };
};

interface ThunkDispatch {
  (thunkAction: ThunkAction): void;
  <A>(action: A): A;
  <TAction>(action: TAction | ThunkAction): TAction;
}

type ThunkAction = (dispatch: ThunkDispatch) => void;

export const logIn = (data: { id: string; password: string }): ThunkAction => {
  return dispatch => {
    dispatch(loginRequest(data));
    try {
      setTimeout(() => {
        dispatch(
          loginSuccess({
            userId: 1,
            nickname: "dobby"
          })
        );
        dispatch(addPost(""));
      }, 1000);
    } catch (error) {
      dispatch(loginFailure(error));
    }
  };
};

export interface LogOutAction {
  type: typeof LOG_OUT;
}

export const logOut = () => {
  return {
    type: LOG_OUT
  };
};
