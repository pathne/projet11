
import '../../index.css'
import React, { useEffect } from 'react'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Home() {

  useEffect(()=>{
    document.title = 'Argent Bank - Home Page'
  })

  return (
    <React.Fragment>
      <Header />
      <main className="main bg-dark">
        <h1 className="not-found">404</h1>
        <h3 className="not-found">This page does not exist</h3>
      </main>
      <Footer />
    </React.Fragment>
  )
}
