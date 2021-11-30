import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

const words = ['sky', 'blue', 'falcon', 'wood', 'cloud'];
const items = words.map((word, idx) => {
    return <li key={idx}>{word}</li>;
});

console.log(items);

// ReactDOM.render(
//     <ul> {items} </ul>,
//     document.getElementById('root')
// );

const rooms = [
  { room_type: "Queen", vacant_rooms: 5, price: 100 },
  { room_type: "Double", vacant_rooms: 3, price: 75 },
  { room_type: "Twin", vacant_rooms: 8, price: 60 }
];

const WordList = () => (
  <ol>
      {rooms.map(room => (
          <li>
              {room.room_type},&nbsp;{room.vacant_rooms},&nbsp;&#x24;{room.price}
          </li>
      ))}
  </ol>
);

ReactDOM.render(<WordList />, document.getElementById('root'));