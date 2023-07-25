import React from 'react';
import "./App.css";
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Resume from './components/resume/Resume';
import Portfolio from './components/portfolio/Portfolio';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';


const App = () => {
  return (
    <>
    <Header/>

    <main className='main'>
      <Home/>
      <About/>
      <Resume/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </main>
    </>
  );
};

export default App;
