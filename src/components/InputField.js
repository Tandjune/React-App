import React, { Component } from "react";
import style from "../style/InputField.module.scss";

class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
    };
  }

  changeHandler = (event) => {
    this.props.onInputChange(event.target.value);
  };

  render() {
    return (
      <div className={style.inputField}>
        <label>{this.props.label}</label>
        <input value={this.props.value} onChange={this.changeHandler} />
      </div>
    );
  }
}

export default InputField;
