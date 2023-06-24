import alertSlice from "../../store/slice/alert";
import store from "../../store/store";

//function for handling auth
export const authFunction = (authType, values) => {
  console.log(values);
  try {
    //Send api request for authentication
    if (authType === "SIGNUP") {
      //send request to endpoint for signup
    } else if ((authType = "LOGIN")) {
      //send request to endpoint for login
    }

    //saving auth data like token sent from server in localstorage
    //or showing error if any occured
    let error = false;
    if (error) {
      store.dispatch(
        alertSlice.actions.setAlert({ type: "error", content: "error" }) //not working
      );
      return 0;
    } else if (!error) {
      localStorage.setItem("auth", 1);
      store.dispatch(
        alertSlice.actions.setAlert({
          type: "success",
          content:
            authType === "SIGNUP" ? "Signup successful" : "Login successful",
        })
      );
      window.location.pathname = "/";
      return 1;
    }
  } catch (err) {
    console.log(err);
    store.dispatch(
      alertSlice.actions.setAlert({
        type: "error",
        content: err?.message ? err.message : "Something went wrong",
      })
    );
    return 0;
  }
};

//logging out
export const signout = () => {
  window.location.pathname = "/login";
  localStorage.removeItem("auth");
};
