const express = require("express");
const authController = require("../controllers/authController");
const pagesController = require("./../controllers/pagesController");

const router = express.Router();

router.route("/").get(authController.isLoggedIn, pagesController.getMainPage);

router.route("/login").get(
  authController.isLoggedIn,
  (req, res, next) => {
    if (res.locals.user) {
      res.redirect("/");
      return;
    }
    next();
  },
  pagesController.getLoginForn
);

router.route("/post/:id").get(authController.protect, pagesController.getPost);

router.route("/account").get(authController.protect, pagesController.account);

router.route("/latestPosts").get(pagesController.getLatestPosts);

router
  .route("/createPost")
  .get(authController.protect, pagesController.createPost);

router
  .route("/submit-form")
  .post(authController.protect, pagesController.updateUserData);
module.exports = router;
