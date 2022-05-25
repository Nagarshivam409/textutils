
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar'
import Textform from './components/Textform';
import React, { useState } from 'react';
import Alert from './components/Alert'
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
  
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState('null');
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert('null')
    }, 1500);
  }
  
  const toggle=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#040420';
      showAlert("Dark Mode Enabled","success");
      document.title="TextUtils -DarkMode";
      
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode Enabled","success");
      document.title="TextUtils -LightMode";
      
      
    }
  }
  return (
   <>
   {/* <Router> */}
    <Navbar title="TextUtils" mode={mode} toggle={toggle}/>
    <Alert alert={alert}/>
    {/* <Switch>
        <Route exact path="/"> */}
          <div className="container my-3">
            <Textform heading ="Enter Your Text Below to Analyze" mode={mode} showAlert={showAlert} toggle={toggle} />
          </div>

          {/* </Route>
          <Route exact path="/about">
           */}
              {/* <About/>
            
          </Route> */}
          {/* <Route path="/home">
          <div className="container my-3">
            <Textform heading ="Enter Your Text Below to Analyze" mode={mode} showAlert={showAlert} toggle={toggle} />
          </div>
          </Route> */}
          
        {/* </Switch>
    
        </Router> */}
        
    </>
  );
}

export default App;
