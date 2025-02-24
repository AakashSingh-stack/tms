import React from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import { Sidebar } from './Components/Navbar/Sidebar';

function App() {
  return (
    <Router>
        <Sidebar />
        <Routes>
          {/* <Route path='/' element={}/> */}
        </Routes>
  </Router>
    
  );
}

export default App;
