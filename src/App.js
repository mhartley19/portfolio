import logo from './logo.svg';
import {Home} from "./components/pages/homepage"
import {Projects}from './components/pages/projects'
import {Contact}from './components/pages/contact'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { render } from 'react-dom'
import './App.css';
import './css/fonts.css';
import './css/navbar.css';
import './css/projects.css';



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
