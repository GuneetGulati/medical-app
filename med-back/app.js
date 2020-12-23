import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const connection_url =
  "mongodb+srv://admin:CowhCQomQkjvQiB4@cluster0.prd2x.mongodb.net/medDbB?retryWrites=true&w=majority";

mongoose.connect(connection_url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("DB connected");
});

app.get("/", (req, res) => {
  res.send("hello world");
});
app.post("/patient/:id/profile", (req, res) => {
  console.log(res);
});

app.listen(8080, () => {
  console.log("Server has started");
});
