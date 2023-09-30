
import '../../index.css'
import React, { useEffect } from 'react'

import Header from '../../components/Header'
import SignInForm from '../../components/SignInForm'
import Footer from '../../components/Footer'

export default function Home() {

  useEffect(()=>{
    document.title = 'Argent Bank - Home Page'
  })

  return (
    <React.Fragment>
      <Header />
      <main className="main bg-dark">
        <SignInForm />
      </main>
      <Footer />
    </React.Fragment>
  )
}
