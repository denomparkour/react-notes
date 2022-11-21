import './App.css'
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import LoginPage from './components/Login';
import SignUp from './components/Signup'
import Notes from './components/Notes';
export default function App() {
  return(
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/notes" element={<Notes/>}/>
      </Routes>
      </BrowserRouter>
  </> 
) 
}
