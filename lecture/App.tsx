import * as React from "react";
import { Component, FC } from "react";
import { Dispatch } from "redux";
import { connect, useSelector, useDispatch } from "react-redux";
import { logIn, logOut, ThunkDispatch } from "./actions/user";
import { UserState } from "./reducers/user";

import { RootState } from "./reducers";

interface StateProps {
  user: UserState;
}

interface Props {
  user: UserState;
}

interface DispatchProps {
  dispatchLogIn: ({ id, password }: { id: string; password: string }) => void;
  dispatchLogOut: () => void;
}

const App: FC = () => {
  const { isLogingIn, data } = useSelector<RootState, UserState>(
    state => state.user
  );
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(
      logIn({
        id: "dobby",
        password: "비밀번호"
      })
    );
  };

  const onLogout = () => {
    dispatch(logOut());
  };
  return (
    <div>
      {isLogingIn ? (
        <div>로그인 중</div>
      ) : data ? (
        <div>{data.nickname}</div>
      ) : (
        "로그인 해주세요."
      )}

      {!data ? (
        <button onClick={onClick}>로그인</button>
      ) : (
        <button onClick={onLogout}>로그아웃</button>
      )}
    </div>
  );
};

// class App extends Component<StateProps & DispatchProps> {
//   onClick = () => {
//     this.props.dispatchLogIn({
//       id: "dobby",
//       password: "비밀번호"
//     });
//   };

//   onLogout = () => {
//     this.props.dispatchLogOut();
//   };

//   render() {
//     const { user } = this.props;
//     return (
//       <div>
//         {user.isLogingIn ? (
//           <div>로그인 중</div>
//         ) : user.data ? (
//           <div>{user.data.nickname}</div>
//         ) : (
//           "로그인 해주세요."
//         )}

//         {!user.data ? (
//           <button onClick={this.onClick}>로그인</button>
//         ) : (
//           <button onClick={this.onLogout}>로그아웃</button>
//         )}
//       </div>
//     );
//   }
// }

const mapStateToProps = (state: RootState) => ({
  user: state.user,
  posts: state.posts
});

const mapDispatchToProps = (dispatch: ThunkDispatch) => ({
  dispatchLogIn: (data: { id: string; password: string }) =>
    dispatch(logIn(data)),
  dispatchLogOut: () => dispatch(logOut())
});

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
