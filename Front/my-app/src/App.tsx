import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Login from './features/counter/Login';
import {selectLogged} from './features/counter/loginSlice'
import { useAppSelector, useAppDispatch } from './app/hooks';
import Register from './features/counter/Register';
import Crud from './features/counter/Crud';
import MyNavbar from './features/counter/MyNavBar';
import { Outlet } from 'react-router-dom';


function App() {
  const logged = useAppSelector(selectLogged);
  return (
    <div className="App">
      <header className="App-header">
        <MyNavbar></MyNavbar>
        <Outlet></Outlet>
        <Login></Login>
        {logged ? <Crud></Crud>:<Register></Register>}
        
      </header>
    </div>
  );
}

export default App;
