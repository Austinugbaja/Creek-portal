import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/About';
import Hero from './components/Hero';
import HorizontalLine from './components/HorizontalLine';
import horizontalLine from './components/HorizontalLine';
import Navbar from './components/Navbar';
import Updates from './components/Updates';

function App( ) {
 
  return (
   <>
   <Router>
     <Navbar />
     <Switch>
       <Route path="/" exact />
     </Switch>
   </Router>
   <Hero />
   <About />
   <HorizontalLine />
   <About />
   <HorizontalLine />
   <About />
   <Updates />
   {/* <ImageSlider /> */}
   </>
  );
}

export default App;
