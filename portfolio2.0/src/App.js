import Footer from './components/Footer/Footer';
import './App.css';
import Header from './components/Header/Header';
import React, { useState } from 'react';
import Contact from '../src/components/Contact/Contact';
import Resume from '../src/components/Resume/Resume';
import About from './components/About/About';
import Portfolio from './components/Portfolio//projects';

function App() {
  const [currentTab, setCurrentTab] = useState('about');

  // This function checks to see which tab is selected and then generates the appropriate tab.
  const renderTab = () => {
    switch (currentTab) {
      case 'about':
        return <About />;
      case 'portfolio':
        return <Portfolio />;
      case 'contact':
        return <Contact />;
      case 'resume':
        return <Resume />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="mobile-header">
        <Header currentTab={currentTab} setCurrentTab={setCurrentTab}></Header>
      </div>
      <div>
        <main>{renderTab()}</main>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
