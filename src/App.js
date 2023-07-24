import React from 'react';
import "./App.css";
import Header from './components/header/Header';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
    <Header/>
    </>
  );
};

export default App;
