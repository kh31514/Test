import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';


function App() {
  return (
    <HomePage />
    // <Router>
    //   <div className="App">
    //     <Routes>
    //       <Route exact path="/" component={HomePage} />
    //     </Routes>
    //   </div>
    // </Router>
  );
}

export default App;