import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto">
        <ul className="flex justify-end pr-8">
          {/* Add extra space between list items */}
          <li className="mr-8">
            <Link to="/" className="text-white hover:text-gray-200">
              Home
            </Link>
          </li>
          <li>
            <Link to="/cart" className="text-white hover:text-gray-200">
              Cart
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
