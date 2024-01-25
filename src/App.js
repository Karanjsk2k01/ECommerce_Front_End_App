import logo from './logo.svg';
import './App.css';
import CustomNavbar from './components/Navbar';
import Footer from './components/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Product from './components/Products/Product';
import Cart from './components/Cart/Cart';



function App() {
  return (
    < >
      <CustomNavbar />
      <Product />
      <Footer />
      {/* <Cart /> */}
    </>
  );
}

export default App;
