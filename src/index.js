import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Xys from './About';
import { Myabout1 } from './About';

import "./style.css"; 



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Xys/>
    <Myabout1></Myabout1>
  
  </React.StrictMode>
);
