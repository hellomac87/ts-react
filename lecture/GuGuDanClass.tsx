import * as React from "react";
import { Component } from "react";

interface State {
  first: number;
  second: number;
  value: string;
  result: string;
}

class GuGuDan extends Component<{}, State> {
  state = {
    first: Math.ceil(Math.random() * 9),
    second: Math.ceil(Math.random() * 9),
    value: "",
    result: ""
  };
  onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const { first, second, value } = this.state;

    e.preventDefault();

    if (parseInt(value) === first * second) {
      this.setState(prevState => {
        return {
          result: "정답: " + prevState.value,
          first: Math.ceil(Math.random() * 9),
          second: Math.ceil(Math.random() * 9),
          value: ""
        };
      });

      if (this.input) {
        this.input.focus();
      }
    } else {
      this.setState(prevState => {
        return {
          result: "땡",
          value: ""
        };
      });
      if (this.input) {
        this.input.focus();
      }
    }
  };

  onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({
      value: e.target.value
    });
  };
  input: HTMLInputElement | null = null;

  onRefInput = (c: HTMLInputElement) => {
    this.input = c;
  };

  render() {
    const { first, second, value, result } = this.state;
    const { onSubmit, onChange, onRefInput } = this;
    return (
      <>
        <div>
          {first} 곱하기 {second}는?
        </div>
        <form onSubmit={onSubmit}>
          <input
            ref={onRefInput}
            type="number"
            value={value}
            onChange={onChange}
          />
          <button>입력!</button>
        </form>
        <div id="result">{result}</div>
      </>
    );
  }
}

export default GuGuDan;
