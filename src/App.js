import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home/Home';
import Store from './components/Store/Store';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import ProductDetail from './components/Store/Products/ProductDetail';
import AuthForm from './components/Auth/AuthForm';
import AuthContext from './components/Context/Auth-context';  // Assuming AuthContext is exported from AuthContext file

function App() {
  const authContextValue = useContext(AuthContext);
  const isLoggenIn = authContextValue.isLoggenIn;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        {isLoggenIn ? (
          <>
            <Route path="/Store" element={<Store />} exact />
            <Route path="/auth" element={<Navigate to="/" />} exact />
          </>
        ) : (
          <>
            <Route path="/Store" element={<Navigate to="/" />} exact />
            <Route path="/auth" element={<AuthForm />} exact />
          </>
        )}

        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
