import React, { Component } from "react";
import style from "../style/ChannelsField.module.scss";
import ChannelBtn from "./ChannelBtn";

class ChannelsField extends Component {
  constructor(props) {
    super(props);
    // this.showList = this.showList.bind(this);
    this.state = {
      isExpanded: false,
      selectedChannels: [],
    };
  }

  showList = () => {
    if (this.state.isExpanded) {
      this.setState({
        isExpanded: false,
      });
    } else {
      this.setState({
        isExpanded: true,
      });
    }
  }

  addChannel(channel) {
    const exist = this.state.selectedChannels.find((cha) => cha === channel);
    if (exist !== undefined) {
      this.setState({
        isExpanded: false,
      });
      return;
    }
    this.state.selectedChannels.push(channel);
    this.setState({
      selectedChannels: this.state.selectedChannels,
      isExpanded: false,
    });
  }
  deleteChannel = (channel) => {
    const index = this.state.selectedChannels.indexOf(channel);
    if (index > -1) {
      this.state.selectedChannels.splice(index, 1);
      this.setState({
        channels: this.state.selectedChannels,
      });
    }
  }
  render() {
    return (
      <div>
        <div className={style.row}>
          <div className={style.title}>Selected Channels</div>
          <div className={style.list}>
            {
              <ul className={[style.row, style.listBtn].join(" ")}>
                {this.state.selectedChannels.map((channel) => (
                  <ChannelBtn
                    key={channel.id}
                    channel={channel}
                    deleteChannel={this.deleteChannel}
                  ></ChannelBtn>
                ))}
              </ul>
            }
            <div className={style.dropdown}>
              <button onClick={this.showList}>+</button>
              {this.state.isExpanded && (
                <div className={style.channelsList}>
                  <ul>
                    {this.props.channels.map((channel) => (
                      <li
                        key={channel.id}
                        onClick={() => this.addChannel(channel)}
                      >
                        {channel.label}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChannelsField;
