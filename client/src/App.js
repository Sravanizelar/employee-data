import React, { Fragment } from 'react';
import './App.css';
import Input from './components/Input';
import Employeelist from './components/employeelist';


function App() {
  return ( <Fragment>
    <div className="container">
    <Input />
    <br />
    <br />
    <Employeelist />
    </div>
  </Fragment>
  );
}
       

export default App;
