import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route
import About from './components/About/About';
import Store from './components/Store/Store';
import Contact from './components/Contact/Contact';
import ProductDetail from './components/Store/Products/ProductDetail';
import AuthForm from './components/Auth/AuthForm';
import { useContext } from 'react';
import { redirect } from 'react-router-dom';
import AuthContext from './components/Context/Auth-context';


function App() {

  const AuthContextValue = useContext(AuthContext)

  const isLoggenIn = AuthContextValue.isLoggenIn

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        {isLoggenIn && <Route path="/Store" element={<Store />} />}
        {!isLoggenIn && <redirect to="/" />}
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/Auth" element={<AuthForm />} />
      </Routes>
    </Router>
  );
}

export default App;

