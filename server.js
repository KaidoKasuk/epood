const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs").promises;
const PORT = 8000;

// Middleware staatiliste failide jaoks
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "epood3-json", "index.html"));
});

// Funktsioon: Laadi andmed FakeStore API-st ja salvesta faili
const fetchAndSaveProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  if (!response.ok) {
    throw new Error("failed to fetch products");
  }
};
fetchAndSaveProducts();

fs.readFile("./epood3-json/products.json", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  try {
    // Parse JSON string into JavaScript object
    const products = JSON.parse(data);
    console.log(products);
  } catch (parseErr) {
    console.error("Error parsing JSON:", parseErr);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
