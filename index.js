const { UserRouter } = require("./Routes/user.route.js");
const express = require("express");

require("dotenv").config();
const { connection } = require("./db.js");

const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors({ origin: "*" }));

app.get("/", (req, res) => {
  res.status(200).send("Api is working fine.");
});

app.use("/chat", UserRouter);
app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Connected to Database");
  } catch (e) {
    console.log("Not Connected to Database");
  }
  console.log(`Server is running at port ${process.env.port}`);
});
