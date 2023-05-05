import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Welcome from './components/Welcome';
import './styles/index.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'

function App() {
  const [currentPage, setCurrentPage] = useState('Welcome')

  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      
      return <AboutMe />
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />
    }
    if (currentPage === 'Contact') {
      return <Contact />
    }
    if (currentPage === 'Resume') {
      return <Resume />
    }
    if (currentPage === 'Welcome') {
      return <Welcome />
    }
  }
  return (
    <div className='flex'>
      <Header setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
