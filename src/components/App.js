import React, { useState } from 'react';
import Signin from "./Signin";

export default () => {
  const [name, setName] = useState("") //useStateの中身に初期値を設定可能
  console.log({name});

  return (
    <Signin setName={setName}/> //SigninコンポへsetNameの値を渡す
    
  )
};
