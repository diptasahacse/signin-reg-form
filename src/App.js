import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Exercise from './components/Exercise/Exercise';
import React, { createContext, useContext, useState } from 'react';
export const myContext = createContext(false);
function App() {
  const [userPresent, setUserPresent] = useState(false);
  return (
    <div>

      <Header userPresent={userPresent}></Header>
      <myContext.Provider value ={setUserPresent}>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/exercise' element={<Exercise></Exercise>}></Route>
        </Routes>

      </myContext.Provider>


    </div>
  );
}

export default App;
