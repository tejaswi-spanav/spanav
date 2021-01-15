import logo from './logo.svg';
import React from 'react';
import './App.css';
import Navigbar from './components/Navigbar';
import Flow from './components/Flow';
import Carosuel from'./components/Carosuel';
import ContactUs from './components/ContactUs';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from './components/Navigation';
import Main from './components/Main';
import Courses from './components/Courses';
import Blogs from './components/Blogs';

import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Test from './components/Test';
// function App() {
//   return (
//     <div className="App">
//       {/* <Navigbar />
//       <Carosuel />
     
//      <Flow />
//      <ContactUs /> */}

//      <Navigation />
//       <Main />
//     </div>
//   );
// }

// export default App;

const App = () => (
  <Router>
  <div className='app'>
    
  
    <Navigbar />
  
  
    <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/Blogs' component={Blogs}></Route>
        {/* <Route exact path='/Events' component={Events}></Route> */}
        <Route exact path='/Courses' component={Courses}></Route>
    </Switch>
   
    <ContactUs />
  </div>
  
  </Router>
);

export default App;
