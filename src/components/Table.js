import React, { Component } from "react";
import TableRow from "./TableRow";
import style from "../style/Table.module.scss";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfRow: 0,
      listOfRows: [],
    };
  }
  deleteRow = (id) => {
    const index = this.state.listOfRows.indexOf(id);
    if (index > -1) {
      this.state.listOfRows.splice(index, 1);
      this.setState({
        listOfRows: this.state.listOfRows,
      });
    }
  };
  addRow = () => {
    const newId = this.state.numberOfRow + 1;
    this.state.listOfRows.push(newId);
    this.setState({
      numberOfRow: newId,
      listOfRows: this.state.listOfRows,
    });
  };

  render() {
    return (
      <div>
        {
          <ul>
            {this.state.listOfRows.map((row) => (
              <TableRow
                key={row}
                id={row}
                deleteRow={this.deleteRow}
              ></TableRow>
            ))}
          </ul>
        }
        <div className={style.addButton} onClick={this.addRow}>
          +
        </div>
      </div>
    );
  }
}

export default Table;
