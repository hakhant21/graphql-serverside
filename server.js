const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require('cors');

const app = express();

app.use(cors());

const dbUri = "mongodb+srv://admin:admin@read-list.ncsza.mongodb.net/read-list?retryWrites=true&w=majority";

mongoose
  .connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(res => console.log('Database Connected...'))
  .catch((err) => console.log(err));

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true
  })
);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
