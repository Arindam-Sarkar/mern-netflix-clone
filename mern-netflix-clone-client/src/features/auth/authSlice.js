import {
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../../utils/firebaseConfig";


const initialState = {
  authObj: undefined
};

export const fetchAuth = createAsyncThunk(
  "Auth/GetAuth",
  async (credential) => {

    try {
      const retVal = await signInWithEmailAndPassword(firebaseAuth,
        credential.email,
        credential.pass);
      console.log(retVal.user)
      return retVal.user;
    } catch (error) {
      // console.log(error)
      return error
    }
  }
)


export const authSlice = createSlice({
  name: "auth",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(fetchAuth.fulfilled, (state, action) => {
      // console.log(action.payload);

      // console.log(action.payload);
      // state.authObj[0] = action.payload
    });
    builder.addCase(fetchAuth.rejected, (state, action) => {
      // state.authObj[0] = action.payload
    });
  },
});



