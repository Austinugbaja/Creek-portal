import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {



  return (
   <>
   <Router>
     <Navbar />
     <Switch>
       <Route path="/" exact />
     </Switch>
   </Router>
   <Hero />
   </>
  );
}

export default App;
