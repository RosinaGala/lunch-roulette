import React from 'react';
import ReactDOM from 'react-dom';
import Header from './atoms/Header';
import Formular from './atoms/Formular';
import Answer from './atoms/Answer';
import './css/App.css';

ReactDOM.render(
  <div>
    <Header />
    <Formular />
    <Answer />
  </div>,
  document.getElementById('root')
);
