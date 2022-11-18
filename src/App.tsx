import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Importing Header and Footer components
import Header from './Views/components/header';
import Footer from './Views/components/footer';

// Importing content components
import Home from './Views/content/home';
import About from './Views/content/about';
import Projects from './Views/content/projects';
import Services from './Views/content/services';
import Contact from './Views/content/contact';

// Importing bootstrap and css
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

// Importing js library
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

//main function
function App() {
  //i wanted get the name of user and then send it for name in Route instead of "dear user".but it didn't work..
  // let x=prompt("what is your name?");
  // console.log(x);
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
          <Routes>
            <Route path="/" element={<Home name="Dear user" />}></Route>
            <Route path="/home" element={<Home name="Dear user" />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/services" element={<Services />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
