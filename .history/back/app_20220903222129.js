const express = require("express");
const cors = require("cors");
const app = express();
const logger = require("morgan");
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

const userRoutes = require("./routes/users.routes");
app.use("/", userRoutes);

app.listen(5005, () => console.log("🏃‍ on port 5005"));
