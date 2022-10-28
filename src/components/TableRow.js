import React, { Component } from "react";
import style from "../style/TableRow.module.scss";
import InputField from "./InputField";

class TableRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      start: "10:01",
      end: "10:10",
      minStart: "10%",
      maxStart: "90%",
    };
  }

  onStartChange = (value) => {
    this.setState({
      start: value,
    });
  };

  onEndChange = (value) => {
    this.setState({
      end: value,
    });
  };

  onChangeDoNothing = (value) => {};

  render() {
    return (
      <div className={style.rowContainer}>
        <div className={style.rowLeft}>
          <InputField
            label={"ID"}
            value={this.state.id}
            onInputChange={this.onChangeDoNothing}
          ></InputField>
        </div>
        <div className={style.rowRight}>
          <div className={style.inputFields}>
            <InputField
              label={"START"}
              value={this.state.start}
              onInputChange={this.onStartChange}
            ></InputField>
            <InputField
              label={"END"}
              value={this.state.end}
              onInputChange={this.onEndChange}
            ></InputField>
            <InputField
              label={"MIN START"}
              value={this.state.minStart}
              onInputChange={this.onChangeDoNothing}
            ></InputField>
            <InputField
              label={"MIN END"}
              value={this.state.maxStart}
              onInputChange={this.onChangeDoNothing}
            ></InputField>
          </div>
          <button onClick={() => this.props.deleteRow(this.props.id)}>X</button>
        </div>
      </div>
    );
  }
}

export default TableRow;
