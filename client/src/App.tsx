import React from 'react';

import { Route, Routes } from 'react-router-dom';

import Main from './components/main';
import Cart from './components/cart';
import Order from './components/order';
import SigninScreen from './screens/signinScreen'
import SignupScreen from './screens/signupScreen';


import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/order' element={<Order/>} />
      <Route path='/signin' element={<SigninScreen/>} />
      <Route path='/signup' element={<SignupScreen/>} />

    </Routes>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
