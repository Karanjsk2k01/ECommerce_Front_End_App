import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home';
import Store from './Store';
import About from './About';
import Contact from './Contact';
import ProductDetail from './ProductDetail';
import AuthForm from './AuthForm';
import { AuthContext } from './AuthContext';  // Assuming AuthContext is exported from AuthContext file

function App() {
  const authContextValue = useContext(AuthContext);
  const isLoggenIn = authContextValue.isLoggenIn;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        {isLoggenIn ? (
          <>
            <Route path="/Store" element={<Store />} />
            {/* Add other logged-in routes as needed */}
          </>
        ) : (
          <Route path="/Store" element={<Navigate to="/" />} />
        )}

        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/Auth" element={<AuthForm />} />
      </Routes>
    </Router>
  );
}

export default App;
