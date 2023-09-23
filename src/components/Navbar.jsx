import { Link } from "react-router-dom";
import "../assets/navbar.css";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li>
            <Link to="/add">AddUser</Link>
          </li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
