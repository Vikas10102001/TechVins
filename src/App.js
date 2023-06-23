import { Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './pages/auth/Signup';
import Login from './pages/auth/Login';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
  );
}

export default App;
