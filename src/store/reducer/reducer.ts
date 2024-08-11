import authSlice from "../slices/authSlice";
import modalSlice from "../slices/modalSlice";

const reducer = {
  modal: modalSlice,
  auth: authSlice
};

export default reducer;
