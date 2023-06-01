import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Home from './Components/Home';
import Navbar from './Components/Navbar';

function App() {
  return (
   
      <BrowserRouter>
      <Navbar/>
      <Routes>
<Route exact path="/" element={<Home/>}/>
<Route path="/signup" element={<Signup/>}/>
<Route path="/login" element={<Login/>}/>

</Routes>
</BrowserRouter>
  
  );
}

export default App;
