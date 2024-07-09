import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./style.css"; 
import Myloginpage from './modules/auth/Myloginpage';
import Myregistorpage from './modules/auth/Myregistorpage';
import Mylandingpage from './modules/pages/Mylandingpage';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Myloginpage/>}></Route>
        <Route path='registor' element={<Myregistorpage/>}></Route>
        <Route path='dashboard' element={<Mylandingpage/>}></Route>
        

      </Routes>
    
    
    </BrowserRouter>

  
  </React.StrictMode>
);
