const express = require("express");
const { connection } = require("./db");
const cors = require("cors");
const { UserRoute } = require("./Routes/user.route");

const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("home page");
});
app.use("/chat", UserRoute);

app.listen(1000, async () => {
  try {
    await connection;
    console.log("server");
  } catch (error) {
    console.log(error);
  }
  console.log("1000");
});
