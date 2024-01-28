import React from 'react'
import CustomNavbar from '../../layout/Navbar'
import Footer from '../../layout/Footer'
import Product from './Products/Product'

const Store = () => {
  return (
    <>
      <CustomNavbar />
      <Product />
      <Footer />
    </>
  )
}

export default Store;