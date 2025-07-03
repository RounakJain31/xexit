const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors());
const authRouter = require("./routes/auth.route");
const userRouter = require("./routes/user.route");
const adminRouter = require("./routes/admin.route");
mongoose
  .connect(
    "mongodb+srv://rounakjain31:MyTestPass123@xexit.rnbucp8.mongodb.net/xexit?retryWrites=true&w=majority"
  )     
  .then(() => console.log("Database Connected"))
  .catch((e) => console.error("MongoDB connection error:", e.message));
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/admin", adminRouter);
const PORT = 8080;
app.listen(8080, () => {
  console.log("Server started on port 8080");
});
// commit changes
//commit change  git remote set-url origin https://gitlab.crio.do/ME_MERN_XEXIT_STUBS/ME_MERN_XEXIT_MODULE_ONE_STUB.git