
import React, { useEffect } from 'react'

import Header from '../../components/Header'
import Hero from '../../components/Hero'
import Features from'../../components/Features'
import Footer from '../../components/Footer'

export default function Home() {

  useEffect(()=>{
    document.title = 'Argent Bank - Home Page'
  })

  return (
    <React.Fragment>
      <Header />
      <Hero />
      <Features />
      <Footer />
    </React.Fragment>
  )
}
