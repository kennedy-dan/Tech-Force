import React from 'react'
import Header from './Header'
import Footer from './Footer'
const Layout = ({children}) => {
  return (
    <>
    <Header />
    <div className='lg:mx-14 mx-4'>
      
      {children}
    </div>
    <Footer />
  </>
  )
}

export default Layout