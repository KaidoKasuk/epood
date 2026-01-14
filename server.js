const express = require("express");
const fetchAndSaveProducts = require("./fetchAndSaveProducts");

const app = express();
const PORT = 8000;

// Serve static files (CSS, JS)
app.use(express.static("public"));

// Run fetchAndSaveProducts ONCE at server startup
fetchAndSaveProducts();

// Basic route
app.get("/", (req, res) => {
  res.send("Server is running and products fetched!");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
