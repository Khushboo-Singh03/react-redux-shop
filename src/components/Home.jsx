import { useSelector, useDispatch } from "react-redux";
import { deleteUser, removeUser } from "../features/user/userSlice";
import { Link } from "react-router-dom";

const Home = () => {
  const users = useSelector((state) => state.user.users);
  // console.log("users", users);
  const dispatch = useDispatch();

  // const [editUserState, setEditUserState] = useState({ id: null, user: {} });

  const handleRemoveUser = (id) => {
    dispatch(removeUser(id));
  };

  const handleDeleteAllUser = () => {
    dispatch(deleteUser());
  };

  return (
    <div>
      
      <h2>User Management</h2>

      {/* List Users */}
      <div>
        <div style={{ display: "flex" }}>
          <h3>Users</h3>
          <h5>
            <img
              src="https://cdn-icons-png.flaticon.com/128/5028/5028066.png"
              alt=""
              width={10}
              height={10}
              style={{ padding: "5px", marginLeft: "40px" }}
              onClick={() => handleDeleteAllUser()}
            />
          </h5>
        </div>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} ({user.email})
              <button>
                <Link to={`/edit/${user.id}`} style={{color:"#fff"}}>Edit</Link>
              </button>
              <button onClick={() => handleRemoveUser(user.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
