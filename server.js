const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  const data = {
    email: "hamsik957@gmail.com",
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/marvel957/hngtask0",
  };
  res.status(200).json(data);
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
