import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import AddUser from "./components/AddUser";
import Edit from "./components/Edit";
import UserApi from "./components/ProductApi";
import Cart from "./components/Cart";
// import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserApi/>}/>
        <Route path="/add" element={<AddUser />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="*" element={<Navigate to="/" />} />{" "}
        {/* Handle unknown routes */}
      </Routes>
    </Router>
  );
}

export default App;
