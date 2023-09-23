import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid"; 

const initialState = {
  users: [],
};


const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // addUser: (state, action) => {
    //   const id = nanoid();
    //   state.users.push({ ...action.payload, id });
    //   console.log("Action payload",{...action.payload} )
    // },
    addUser: (state, action) => {
      const id = nanoid();
      state.users = [...state.users, { ...action.payload, id }];
      console.log("Action user",...state.users )
      console.log("Action payload", { ...action.payload, id } )
    },
    // editUser: (state, action) => {
    //   const { id, updatedUser } = action.payload;
    //   console.log("data for edit", action.payload);
    //   const index = state.users.findIndex((user) => user.id === id);
    //   console.log("data", index);
    //   if (index !== -1) {
    //     state.users[index] = { ...state.users[index], ...updatedUser };
    //     console.log("data dfgd", {...state.users[index]});
    //     console.log("data updated user", {...updatedUser});
    //   }
    // },

    editUser: (state, action) => {
      const { id, updatedUser } = action.payload;
      console.log("data for edit", action.payload);
    
      // Use map to create a new array with the updated user
      state.users = state.users.map((user) =>
        user.id === id ? { ...user, ...updatedUser } : user
      );
    
      console.log("Updated users:", state.users);
    },    
    removeUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
      console.log("data", state.users);
    },
    deleteUser: (state) => {
      state.users = [];
    },
  },
});

export const { addUser, editUser, removeUser,deleteUser } = userSlice.actions;
export default userSlice.reducer;
