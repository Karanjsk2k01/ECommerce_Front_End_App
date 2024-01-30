import React, { useContext, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AuthContext from './components/Context/Auth-context';

// Lazy-loaded components
const Home = lazy(() => import('./components/Home/Home'));
const Store = lazy(() => import('./components/Store/Store'));
const About = lazy(() => import('./components/About/About'));
const Contact = lazy(() => import('./components/Contact/Contact'));
const ProductDetail = lazy(() => import('./components/Store/Products/ProductDetail'));
const AuthForm = lazy(() => import('./components/Auth/AuthForm'));

function App() {
  const authContextValue = useContext(AuthContext);
  const isLoggenIn = authContextValue.isLoggenIn;

  return (
    <Router>
      <Suspense fallback={<div className='d-flex align-items-center justify-content-center'>loading...</div>}>
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
      </Suspense>
    </Router>
  );
}

export default App;
