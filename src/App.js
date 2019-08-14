import React from 'react';
import './App.css';
import Header from './views/Header';
import MainContent from './views/MainContent';
import Footer from './views/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <MainContent/>
      <Footer/>
    </div>
  );
}

export default App;
