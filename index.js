const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.status(200).send("Hello CI/CD");
});

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

app.get("/feature", (req, res) => {
  res.status(200).json({ feature: "working" });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;