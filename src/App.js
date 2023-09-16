// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './componets/Navbar';
import TextForm from './componets/TextForm';
import Alert from './componets/Alert';
import About from './componets/About';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";









function App() {
   const [mode, setMode] =useState('light');
   const [alert, setAlert] =useState(null);
   const showAlert = (message, type)=>{
    setAlert({
      msg : message,
      type : type
   })
   setTimeout(() => {
    setAlert(null);
   }, 2000);
   };
   

 

   const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor= 'grey';
      showAlert('Dark mode is Enable', 'Success');
     
    }
    else{
      setMode('light');
      document.body.style.backgroundColor= 'white';
      showAlert('Light mode is Enable', 'Success');
      
    }
   }
  return (
  
    <>
      <Router>


         <Navbar  title="TextUtils" mode={mode} toggleMode={toggleMode} />
         <Alert alert={alert}/>
 
 <div className="container mt-3">

 <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          
          <Route exact path="/">
          <TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert}/>
          </Route>
        </Switch>

     
    
   </div>
  

   </Router>
   </>
   
  );
}

export default App;
