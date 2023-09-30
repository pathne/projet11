
import './index.css'
import { Link } from "react-router-dom"

import SignedUser from '../SignedUser'

export default function Header() {

  return (
    <nav className="main-nav">
      <Link to={"/"} className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src="/img/argentBankLogo-200w.jpg"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <SignedUser />
    </nav>
  )
}
