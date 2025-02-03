const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json("");
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
