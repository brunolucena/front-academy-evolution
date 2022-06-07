import loginDuck from "./login/loginDuck";
import postsDuck from "./posts/postsDuck";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    login: loginDuck,
    posts: postsDuck,
  },
});
