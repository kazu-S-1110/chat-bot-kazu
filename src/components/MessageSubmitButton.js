import React from 'react';
import { IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { pushMessage } from '../firebase';

const MessageSubmitButton = ({ name, setText, text }) => {
  return (
    <IconButton
      disabled={text === ''} //空文字なら無効化
      onClick={() => {
        pushMessage({ name: 'wt', text });
        setText('');
      }}
    >
      <SendIcon />
    </IconButton>
  );
};

export default MessageSubmitButton;
