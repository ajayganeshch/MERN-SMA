import { showAlert } from "./alerts";
import { user_url } from "./config";
import axios from "axios";

export const updateUserData = async function (name, email, userName, about) {
  try {
    const base_url = window.location.origin;

    console.log(name, email, userName, about);
    const res = await axios({
      method: "PATCH",
      url: `${base_url}/api/users/updateMe`,
      data: {
        name,
        email,
        userName,
        about,
      },
    });

    if (res.data.status == "success") {
      showAlert("success", "Data Updated Successfully");

      document
        .querySelector(".profile-form-div-id")
        .querySelectorAll("input, textarea, select, button")
        .forEach((input) => {
          input.disabled = true;
        });

      document.querySelector(".profile-submit-btn").style.display = "none";
    }
  } catch (err) {
    console.log("came err");
    showAlert("error", err.response.data.message);
  }
};
