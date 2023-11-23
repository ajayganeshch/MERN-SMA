import { post_url } from "./config";
import { showAlert } from "./alerts";
import axios from "axios";

export const latesPosts = async () => {
  try {
    const res = await axios({
      method: "get",
      url: "http://127.0.0.1:5000/latestPosts",
    });
  } catch (err) {
    console.log(err);
    // showAlert("error", "Error logging out Try Again ");
  }
};
