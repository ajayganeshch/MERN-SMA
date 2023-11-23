const fs = require("fs");
const mongoose = require("mongoose");
// const handleAsyncFunction = require("./../utils/handleAsyncFunction");

const postsModel = require("./../models/postsModel");
const interactionModel = require("./../models/interactionModel");
const UserModel = require("./../models/userModel");

const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

//--------------- Data Base ---------------

// console.log(process.env);
// console.log(process.env.DATABASE);

const db = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose.connect(db).then(() => {
  console.log("Connected To DB");
});

const interactionsTotak = JSON.parse(
  fs.readFileSync(`${__dirname}/interactions.json`, "utf-8")
);

const postsTotal = JSON.parse(
  fs.readFileSync(`${__dirname}/posts.json`, "utf-8")
);

const usersTotal = JSON.parse(
  fs.readFileSync(`${__dirname}/users.json`, "utf-8")
);

//--------------- Import Data From File System---------------

const importData = async () => {
  console.log("came");
  try {
    await interactionModel.create(interactionsTotak);
    await postsModel.create(postsTotal);
    await UserModel.create(usersTotal);
    console.log("Successfully Loaded");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

//---------------Delete Data Base ---------------

const deleteData = async () => {
  try {
    await interactionModel.deleteMany();
    await postsModel.deleteMany();
    await UserModel.deleteMany();

    console.log("Successfully Deleted");
  } catch (err) {
    console.log(err.stack);
  }
  process.exit();
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}

// node .\data\importDevData.js --import
// node .\data\importDevData.js --delete
