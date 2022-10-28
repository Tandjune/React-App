import React from 'react';
import style from '../style/ChannelBtn.module.scss'

function ChannelBtn(props) {
  return (
    <div className={style.ChannelButton} style={{backgroundColor:props.channel.color}}>
      <button className={style.channelCloseBtn} onClick={() => props.deleteChannel(props.channel)}>X</button>
      <label>{props.channel.label}</label>
    </div>
  );
}

export default ChannelBtn;