const path = require("path");
const models = require("./models");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const db = require("../config/keys.js").MONGO_URI;
const schema = require("./schema/schema");
const expressGraphQL = require("express-graphql");
const cors = require("cors");
const app = express();

app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("/", (req, res) => {
    const indexPath = path.resolve(__dirname, "client", "build", "index.html");
    console.log(indexPath);
    res.sendFile(indexPath);
  });
}

app.use(
  "/graphql",
  expressGraphQL(req => {
    return {
      schema,
      context: {
        token: req.headers.authorization
      },
      graphiql: true
    };
  })
);

if (!db) {
  throw new Error("You must provide a string to connect to MongoDB Atlas");
}

mongoose
  // The configuration object we pass into connect() prevents an error being thrown by the latest release of MongoDB's driver
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

// Recall that we use body-parer in order to be able to parse incoming requests in middleware before they are handled
app.use(bodyParser.json());

module.exports = app;
