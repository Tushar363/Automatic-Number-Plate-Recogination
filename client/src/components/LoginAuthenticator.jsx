import { useAuth0 } from "@auth0/auth0-react"
import NavBar from "./NavBar";
import LoggedInNavBar from "./LoggedInNavBar";

const LoginAuthenticator = () => {

    const {isAuthenticated} = useAuth0();

  return (
    <div>
        {isAuthenticated ? <LoggedInNavBar /> : <NavBar/>}
    </div>
  )
}

export default LoginAuthenticator