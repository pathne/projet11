
import '../../index.css'
import { Link } from "react-router-dom"

export default function SignIn() {
  return (
    <div>
      <Link to={"/sign-in"} className="main-nav-item">
        <i className="fa fa-user-circle"></i>
        Sign In
      </Link>
    </div>
  )
}
