import { useState } from "react";
import { addUser } from "../features/user/userSlice";
import { useDispatch,} from "react-redux";
import Home from "./Home";

const AddUser = () => {
  const [newUser, setNewUser] = useState({ name: "", email: "" });
  // const users = useSelector((state) => state.user.users);
  // console.log("users", users);
  const dispatch = useDispatch();

  const handleAddUser = (e) => {
    e.preventDefault();
    if (newUser.name && newUser.email) {
      dispatch(addUser(newUser));
      setNewUser({ name: "", email: "" });
      localStorage.setItem("newUser", JSON.stringify(newUser));
    }
  };

  return (
    <>
      <Home />
      {/* Add User */}
      <div>
        <h3>Add User</h3>
        <input
          type="text"
          placeholder="Name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
        <button onClick={handleAddUser}>Add User</button>
      </div>
    </>
  );
};

export default AddUser;
