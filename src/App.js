import React from 'react';
import "./App.css";
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Resume from './components/resume/Resume';


// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Portfolio from './components/Portfolio';
// import Contact from './components/Contact';
// import Resume from './components/Resume';
// import Footer from './components/Footer';

const App = () => {
  return (
    <>
    <Header/>

    <main className='main'>
      <Home/>
      <About/>
      <Resume/>
    </main>
    </>
  );
};

export default App;
