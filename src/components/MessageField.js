import React, { useState } from 'react';
import { TextField } from '@material-ui/core';

const MessageField = ({ name, setText, text }) => {
  const [isComposed, setIsComposed] = useState(false); //編集中であるか識別するState

  return (
    <TextField
      onChange={(e) => setText(e.target.value)}
      fullWidth={true}
      onKeyDown={(e) => {
        if (isComposed) return;

        const text = e.target.value;
        if (text === '') return; //空文字の場合であればなにも処理しない

        if (e.key === 'Enter') {
          console.log('push message to firebase');
          setText('');
          e.preventDefault(); //画面のリロードを防げる
        }
      }}
      onCompositionStart={() => setIsComposed(true)} //入力文字を識別するオプション
      onCompositionEnd={() => setIsComposed(false)}
      value={text}
    />
  );
};

export default MessageField;
