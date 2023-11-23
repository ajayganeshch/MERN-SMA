import { showAlert } from "./alerts";
import axios from "axios";

export const createPost = async function (name, description, category) {
  try {
    let res = await axios({
      method: "post",
      url: "http://127.0.0.1:5000/api/posts/createPost",
      data: {
        name,
        description,
        category,
      },
    });

    if (res.data.status == "success") {
      showAlert("success", "Post Has Been Create 🎉");
      window.setTimeout(() => {
        location.assign("/");
      }, 1000);
    }

    console.log(res);
  } catch (err) {
    console.log(err);
    showAlert("error", err.response.data.message || err);
  }
};
