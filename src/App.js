import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import SideNavBar from './components/SideNavBar';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex flex-1">
          <SideNavBar />
          <MainContent />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
