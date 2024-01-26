import CustomNavbar from './Navbar';
import Product from './Products/Product';
import Footer from './Footer';
import CartProvider from '../Context/context-provider';


const Home = () => {
  return (
    <>
      <CustomNavbar />
      <Product />
      <Footer />
    </>

  )
}

export default Home;