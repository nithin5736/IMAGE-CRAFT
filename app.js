const express = require("express");
const openAIRoutes = require("./routes/openAIRoutes");
const path = require("path");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/openai", openAIRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("App listening on port " + port);
});
