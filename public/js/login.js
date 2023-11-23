import axios from "axios";
import { showAlert } from "./alerts";
// Login Page Backend

export async function login(email, password) {
  try {
    const res = await axios({
      method: "POST",
      url: "http://127.0.0.1:5000/api/users/login",
      data: {
        email,
        password,
      },
    });

    if (res.data.status === "success") {
      showAlert("success", "Successfully Logged In");
      window.setTimeout(() => {
        location.assign("/");
      }, 1000);
    }
  } catch (err) {
    console.log(err);
    showAlert("error", err.response.data.message || err);
  }
}

export const logout = async () => {
  try {
    const res = await axios({
      method: "get",
      url: "http://127.0.0.1:5000/api/users/logout",
    });

    if (res.data.status == "success") {
      showAlert("success", "Successfully Logged Out");
      window.setTimeout(() => {
        location.reload(true);
        location.assign("/");
      }, 2000);
    }
  } catch (err) {
    showAlert("error", "Error logging out Try Again ");
  }
};
