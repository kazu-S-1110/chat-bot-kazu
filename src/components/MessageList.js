import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { messagesRef } from '../firebase';

const useStyles = makeStyles({
  root: {
    gridRow: 1,
  },
});

const MessageList = () => {
  const [messages, setMessages] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    messagesRef
      .orderByKey() //keyは時系列の情報を持つ。keyでorderすることで時系列順にソートする
      .limitToLast(5) //デフォだと全データを取得してしまうのでどれくらい取得するか制限する
      .on('value', (snapshot) => {
        // console.log(snapshot.val()); //出力される結果=> {-ML2BTiEE6pAkPTIu567: {name: "wt", text: "こんにちは"}}
        const messages = snapshot.val();
        if (messages === null) return; // 取得するデータが0件の場合の回避
        const entries = Object.entries(messages); //出力される結果=> [Array(2), Array(2), Array(2)]
        const newMessages = entries.map((entry) => {
          const [key, nameAndText] = entry;
          return { key, ...nameAndText }; //出力される結果 => // (5) [{…}, {…}, {…}] {key: key, name: name, text: text}
        });
        setMessages(newMessages);
      });
  }, []);

  return <div className={classes.root}>MessageList</div>;
};

export default MessageList;
