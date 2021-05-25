import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dbModel from "./dbModel.js";
import dbModeldoctor from "./dbModeldoctor";
const app = express();

const http = require("http");
const server = http.createServer(app);
const socket = require("socket.io");
const io = socket(server);

app.use(express.json());
app.use(cors());

const connection_url =
  "mongodb+srv://admin:CowhCQomQkjvQiB4@cluster0.prd2x.mongodb.net/medDB?retryWrites=true&w=majority";

mongoose.connect(connection_url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("DB connected");
});

// const users = {};

// io.on('connection', socket => {
//   if (!users[socket.id]) {
//       users[socket.id] = socket.id;
//   }
//   socket.emit("yourID", socket.id);
//   io.sockets.emit("allUsers", users);
//   socket.on('disconnect', () => {
//       delete users[socket.id];
//   })

//   socket.on("callUser", (data) => {
//       io.to(data.userToCall).emit('hey', {signal: data.signalData, from: data.from});
//   })

//   socket.on("acceptCall", (data) => {
//       io.to(data.to).emit('callAccepted', data.signal);
//   })
// });

app.get("/", (req, res) => {
  res.send("hello world");
});
//********************************************
app.get("/patient", (req, res) => {
  dbModel.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/patient/:id/profile", (req, res) => {
  const id = req.params;
  const body = req.body;
  const rep = Object.assign(id, body);
  console.log(rep);
  if (rep.check === 0) {
    rep.check = 2;
    console.log(rep);
    console.log("crttt");
    dbModel.create(rep, (err, data) => {
      if (err) {
        return res.status(500).send(err);
      } else {
        return res.status(201).send(data);
      }
    });
  }

  if (rep.check === 2) {
    console.log("updatt");
    dbModel.updateOne(rep, (err, data) => {
      if (err) {
        return res.status(500).send(err);
      } else {
        return res.status(201).send(data);
      }
    });
  }
});

//********************************************

app.get("/doctor", (req, res) => {
  dbModeldoctor.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/doctor/:id/profile", (req, res) => {
  const id = req.params;
  const body = req.body;
  const rep = Object.assign(id, body);
  console.log(rep);
  if (rep.check === 0) {
    rep.check = 2;
    console.log(rep);
    console.log("crttt");
    dbModeldoctor.create(rep, (err, data) => {
      if (err) {
        return res.status(500).send(err);
      } else {
        return res.status(201).send(data);
      }
    });
  }

  if (rep.check === 2) {
    console.log("updatt");
    dbModeldoctor.updateOne(rep, (err, data) => {
      if (err) {
        return res.status(500).send(err);
      } else {
        return res.status(201).send(data);
      }
    });
  }
});

app.listen(8080, () => {
  console.log("Server has started");
});
