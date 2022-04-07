import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Exercise from './components/Exercise/Exercise';
import { useState } from 'react';

function App() {
  const [userPresent, setUserPresent] = useState(true)

  return (
    <div>
      <Header userPresent={userPresent}></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/exercise' element={<Exercise></Exercise>}></Route>
      </Routes>

    </div>
  );
}

export default App;
