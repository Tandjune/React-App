import React, { Component } from "react";
// import logo from './logo.svg';
import ChannelsField from "./components/ChannelsField";
import "./App.scss";
import Table from "./components/Table";
import Timeline from "./components/Timeline";

class App extends Component {
  render() {
    const channels = [
      {
        id: 1,
        label: "Channel A",
        color: "red",
      },
      {
        id: 2,
        label: "Channel B",
        color: "blue",
      },
      {
        id: 3,
        label: "Channel C",
        color: "brown",
      },
      {
        id: 4,
        label: "Channel D",
        color: "green",
      },
      {
        id: 5,
        label: "Channel E",
        color: "orange",
      },
      {
        id: 6,
        label: "Channel F",
        color: "purple",
      },
    ];
    return (
      <div className="App">
        <ChannelsField channels={channels}></ChannelsField>
        <Timeline></Timeline>
        <Table></Table>
      </div>
    );
  }
}

export default App;
