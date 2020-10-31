import React, { useState } from 'react';
import Signin from './Signin';
import Main from './main';

export default () => {
  const [name, setName] = useState(''); //useStateの中身に初期値を設定可能
  console.log({ name });

  if (name === '') {
    return <Signin setName={setName} />;
  } else {
    return <Main name={name} />;
  }
};
