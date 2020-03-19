import * as React from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import GameMatcher from "./GameMatcher";

const Games = () => {
  return (
    <BrowserRouter>
      <div>
        <Link to="/game/number-baseball?limit=10&skip=3&page=5">숫자야구</Link>
        <Link to="/game/rock-scissors-paper">가위바위보</Link>
        <Link to="/game/lotto-generator">로또</Link>
        <Link to="/game/index">게임 매쳐</Link>
      </div>
      <div>
        <Switch>
          <Route exact path="/" component={GameMatcher} />
          <Route path="/game/:name" component={GameMatcher} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Games;
