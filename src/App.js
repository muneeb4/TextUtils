import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) => { setAlert({
    msg : message,
    type: type
    
  })  
   setTimeout(() => {
     setAlert(null);
   }, 1500); }
   
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#383838"
      showAlert('dark mode has been enabled','success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = "white"
      showAlert('light mode has been enabled','success');
    }
    
  }
  return (
  <>
  {/* <Navbar title="Textutils2" aboutText="About" /> */}
  {/* <Router> */}
  <Navbar title="Textutils2" mode = {mode} toggleMode = {toggleMode} aboutText = 'About'/>
  <Alert alert = {alert}/>
   <div className="container my-3">
   {/* <Routes> */}
          {/* <Route exact path="/about" element = {<About />}/> */}
          <TextForm showAlert= {showAlert} heading =  "Enter the text to analyze below" mode = {mode}/>
        {/* </Routes> */}

  </div>
  </>
  );
}

export default App;
