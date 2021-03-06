'use strict';

import React from 'react';

export default

class ChatHistory extends React.Component {
  constructor() {
    super();
    this.state = {msgs : []};
  }

  render() {
    let styles = {
      display: 'inline-flex',
      flexDirection: 'column',
       width: '90%'
     };
    let listyle = {

      backgroundColor: '#36d1f7',
      borderRadius: '5px',
      color: '#f6fdff',
      margin: '.25rem',
      padding: '.25rem',
      width: '100%',
    };

    let messageList = this.props.messages.map(function(message) {
      return (
        <li style = {listyle}>{message}</li>
      );
    });
    return (
      <ul style = {styles}>
        {messageList}
      </ul>
    );
  }
};
