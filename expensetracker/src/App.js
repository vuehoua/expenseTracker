import React from 'react';
//import {BrowserRouter, Route} from 'react-router-dom';

import './App.css';
import Home from './component/home';
import Total from './component/total';



function App() {

  


  // View More Bill 1
  // const view1 = () =>{
  //   return( 
  //   <div>
  //     <Bill1/>
  //   </div>)
  // }



  return (
    <div className="App">
      <Home />
      <Total />
    


    </div>
  );
}

export default App;
