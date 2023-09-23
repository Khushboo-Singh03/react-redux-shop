import { useState } from "react";
import { editUser } from "../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate

const Edit = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.user.users);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Get the navigate function

  const userToEdit = users.find((user) => user.id === id);

  const [editUserState, setEditUserState] = useState({
    id: userToEdit ? userToEdit.id : null,
    user: userToEdit || {},
  });

  const handleEditUser = () => {
    if (
      id &&
      editUserState.user.name &&
      editUserState.user.email
    ) {
      dispatch(
        editUser({ id, updatedUser: editUserState.user })
      );
      setEditUserState({ id: null, user: {} });
      localStorage.setItem("editedUser", JSON.stringify(editUserState.user));
      // Use the navigate function to redirect to the home page ("/")
      navigate("/");
    } else {
      console.error("ID or user data is missing.");
    }
  };

  const handleCancelEdit = () => {
    setEditUserState({ id: null, user: {} });

    // Use the navigate function to redirect to the home page ("/")
    navigate("/");
  };

  return (
    <>
      {/* Edit User */}
      {editUserState.id !== null && (
        <div>
          <h3>Edit User</h3>
          <input
            type="text"
            placeholder="Name"
            value={editUserState.user.name}
            onChange={(e) => {
              setEditUserState({
                ...editUserState,
                user: { ...editUserState.user, name: e.target.value },
              });
            }}
          />
          <input
            type="text"
            placeholder="Email"
            value={editUserState.user.email}
            onChange={(e) => {
              setEditUserState({
                ...editUserState,
                user: { ...editUserState.user, email: e.target.value },
              });
            }}
          />
          <button onClick={handleEditUser}>Save Changes</button>
          <button onClick={handleCancelEdit}>Cancel</button>
        </div>
      )}
    </>
  );
};

export default Edit;
