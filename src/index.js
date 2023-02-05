import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MyComp from'./MyComp';
import ClassBaseCompo from './ClassBaseCompo';
ReactDOM.render(
    <div>
      <MyComp/>
      <ClassBaseCompo />
      <ClassBaseCompo />
      <ClassBaseCompo />
      <ClassBaseCompo />
      <ClassBaseCompo />
      </div>,
  document.getElementById('root')
);

