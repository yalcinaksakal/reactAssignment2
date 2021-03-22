import React, { Component } from "react";
import "./App.css";
import Input from "./Input/Input";
import Validation from "./Validation/Validation";
import Char from "./Char/Char";
class App extends Component {
  state = { text: "", length: 0 };

  textChangedHandler = e => {
    this.setState({ text: e.target.value, textLength: e.target.value.length });
  };

  deleteChar = id => {
    let text = this.state.text.split("");
    text.splice(id, 1);
    text = text.join("");
    this.setState({ text: text, textLength: text.length });
  };

  render() {
    const chars = this.state.text
      .split("")
      .map((ch, i) => (
        <Char textChar={ch} deleteChar={() => this.deleteChar(i)} key={i} />
      ));

    return (
      <div className="App">
        <Input
          text={this.state.text}
          change={this.textChangedHandler}
          textLength={this.state.textLength}
        />
        <Validation textLength={this.state.textLength} />
        <div className="Char">
          Chars:
          {chars}
        </div>
      </div>
    );
  }
}

export default App;
