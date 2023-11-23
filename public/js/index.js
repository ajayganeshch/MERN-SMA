import { login } from "./login";
import { logout } from "./login";
import { updateUserData } from "./updateUserData";
// import { latesPosts } from "./latestPosts";
import { createPost } from "./createPost";
import { showAlert } from "./alerts";

console.log("Starting index.js....");

// Login
document?.querySelector(".form-li")?.addEventListener("submit", (e) => {
  e.preventDefault();
  let email = document.getElementById("email").value;
  let password = document.getElementById("password-take").value;

  login(email, password);
});

// Logout
document?.querySelector(".logout-now")?.addEventListener("click", logout);

// Update User Data
// console.log(document.querySelector("profile-submit-btn"));

let profileForm = document?.querySelector(".profile-form-div-id");
let inputs = profileForm?.querySelectorAll("input, textarea, select, button");
if (inputs) {
  inputs.forEach((input) => {
    input.disabled = true;
  });
}

if (document.querySelector(".profile-submit-btn")) {
  document.querySelector(".profile-submit-btn").style.display = "none";
}

document
  ?.querySelector(".profile-edit-button")
  ?.addEventListener("click", () => {
    inputs.forEach((input) => {
      input.disabled = false;
    });
    document.querySelector(".profile-submit-btn").style.display = "block";
  });

document
  .querySelector(".profile-submit-btn")
  ?.addEventListener("click", (e) => {
    e.preventDefault();
    let email = document.getElementById("email").value;
    let about = document.getElementById("about").value;
    let userName = document.getElementById("userName").value;
    let name = document.getElementById("name").value;

    updateUserData(name, email, userName, about);
  });

document
  ?.querySelector(".create-post-form")
  ?.addEventListener("submit", (e) => {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let category = document.getElementById("category").value;
    let description = document.getElementById("description").value;

    if (!name || !category || !description) {
      showAlert("error", "All Fields Are Mandatory");
      return;
    }

    createPost(name, description, category);
  });

// document.querySelector(".div-latest-posts").addEventListener("click", (e) => {
//   latesPosts();
// });
