import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBtKs6nnwlISWQmWiJpasCtpGhuDYsMDdg',
  authDomain: 'chat-demo-kazu.firebaseapp.com',
  databaseURL: 'https://chat-demo-kazu.firebaseio.com',
  projectId: 'chat-demo-kazu',
  storageBucket: 'chat-demo-kazu.appspot.com',
  messagingSenderId: '946060471627',
  appId: '1:946060471627:web:1e5cd3bc3c912495cb0cce',
};
firebase.initializeApp(firebaseConfig);

const database = firebase.database(); //これがFirebaseコンソール上のデータベースを参照している
const messageRef = database.ref('messages'); //リファレンスを作成する

export const pushMessage = ({ name, text }) => {
  messageRef.push({ name, text });
};
