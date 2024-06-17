import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import PropertyPage from './pages/PropertyPage';
import ContactPage from './pages/ContactPage';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" exact element={<HomePage/>} ></Route>
      <Route path="/property/:id" element={<PropertyPage/>}> </Route>
      <Route path="/contact" element={<ContactPage/>}> </Route>
    </Routes>
  </Router>
);

export default App;
