import * as React from "react";
import { Component, createRef } from "react";

interface State {
  word: string;
  value: string;
  result: string;
}

class WordRealay extends Component<{}, State> {
  state = {
    word: "도비",
    value: "",
    result: ""
  };

  onSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    const input = this.onRefInput.current;
    const { word, value } = this.state;
    if (word[word.length - 1] === value[0]) {
      this.setState({
        result: "딩동댕",
        word: value,
        value: ""
      });
      if (input) {
        input.focus();
      }
    } else {
      this.setState({
        result: "땡",

        value: ""
      });
      if (input) {
        input.focus();
      }
    }
  };

  input: HTMLInputElement | null = null;

  onChangeInput = (e: React.FormEvent<HTMLInputElement>): void => {
    this.setState({ value: e.currentTarget.value });
  };

  onRefInput = createRef<HTMLInputElement>();

  render() {
    const { word, value, result } = this.state;
    return (
      <>
        <div>{word}</div>
        <form onSubmit={this.onSubmitForm}>
          <input
            ref={this.onRefInput}
            value={value}
            onChange={this.onChangeInput}
          />
          <button>클릭!!</button>
        </form>
        <div>{result}</div>
      </>
    );
  }
}

export default WordRealay;
