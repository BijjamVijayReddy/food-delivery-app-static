

import React from 'react'
import Header from '../components/header/AppHeader'
import Home from '../pages/home/Home'
import Footer from '../components/footer/Footer'
import AppRoutes from '../routes/AppRoutes'

const LayOut = () => {
  return (
    <div>
      <Header />

      <AppRoutes/>

      <Footer />
    </div>
  )
}

export default LayOut
