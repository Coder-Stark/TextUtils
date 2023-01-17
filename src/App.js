import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


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
  // const removeBodyClasses = ()=>{
  //   document.body.classList.remove('bg-light');
  //   document.body.classList.remove('bg-dark');
  //   document.body.classList.remove('bg-warning');
  //   document.body.classList.remove('bg-danger');
  //   document.body.classList.remove('bg-success');
  // }
  const toggleMode = (cls)=>{
    // removeBodyClasses();
    console.log(cls);
    document.body.classList.add('bg-'+ cls);
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode has been enabled' , 'success')
      // document.title = 'TextUtils-Dark Mode';
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
      // document.title = 'TextUtils-Light Mode';
    }
  }
  return ( 
    <>
      <Router>
      
        {/* <Navbar title = "TextUtils" aboutText = "About"/> */}
        {/* <Navbar/>           --->> for defualt props check */}

        <Navbar title = "TextUtils" mode = {mode} toggleMode = {toggleMode}/>

        <Alert alert = {alert} />

        <div className="container my-3">
        {/* <TextForm showAlert = {showAlert} heading = "Enter the text " mode = {mode}/>               JUST FOR GITHUB PAGES  */}

          <Routes>
            <Route exact path="/about" element = {<About  mode = {mode}/>} />
            <Route exact path="/" element = {<TextForm showAlert = {showAlert} heading = " Try TextUtils - Word Cunter | Charcter Counter | Lowercase to Uppercase | Uppercase to Lowercase | Remove Extra Spaces" mode = {mode}/>}/>
          </Routes>

        </div>

      </Router>
    </>
  );
}

export default App;
