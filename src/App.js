import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  const[mode , setMode] = useState("light");      //wheter dark mode is enable or not
  const[alert , setAlert] = useState(null);
  const showAlert = (message , type) =>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode has been enabled' , 'success')
      document.title = 'TextUtils-Dark Mode';
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now';
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled' , 'success')
      document.title = 'TextUtils-Light Mode';
    }
  }
  return ( 
    <>
      {/* <Router> */}
      
        {/* <Navbar title = "TextUtils" aboutText = "About"/> */}
        {/* <Navbar/>           --->> for defualt props check */}

        <Navbar title = "TextUtils" mode = {mode} toggleMode = {toggleMode}/>

        <Alert alert = {alert} />

        <div className="container my-3">
        <TextForm showAlert = {showAlert} heading = "Enter the text " mode = {mode}/>

          {/* <Routes>
            <Route exact path="/about" element = {<About />}/>
            <Route exact path="/" element = {<TextForm showAlert = {showAlert} heading = "Enter the text " mode = {mode}/>}/>
          </Routes> */}

        </div>

      {/* </Router> */}
    </>
  );
}

export default App;
