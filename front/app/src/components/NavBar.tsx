import { Link } from "react-router-dom";

import { NavBarStyle } from "../styles/Home.style";

function NavBar() {
  return (
    <NavBarStyle>
      <Link to={`Page1`}>P1</Link>
      <Link to={`Page2`}>P2</Link>
      <Link to={`/`}>Back Home</Link>
    </NavBarStyle>
  );
}

export default NavBar;
