import logo from './logo.svg';
import {Home} from "./components/homepage"
import {Projects}from './components/projects'
import {Contact}from './components/contact'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { render } from 'react-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      
      </Routes>
    
    </BrowserRouter>

      
       
  );
}

export default App;
