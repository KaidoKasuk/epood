const express = require("express");
const fetchAndSaveProducts = require("./utils/fetchAndSaveProducts");
const fs = require("fs"); // async fs methods
const path = require("path");
const app = express();
const PORT = 8000;

const dataFile = path.join(__dirname, "data", "products.json");

const isFileEmpty = (file) => {
  try {
    const rawData = fs.readFileSync(file, "utf-8");
    return !rawData.trim();
  } catch (error) {
    console.error("error reading file", error);
    return true;
  }
};
const isEmptyFile = isFileEmpty(dataFile);

isEmptyFile && fetchAndSaveProducts(dataFile);

//API lokaalsed json andmed

app.get("/api/products", (req, res) => {
  try {
    const rawData = fs.readFileSync(dataFile, "utf-8");
    const products = JSON.parse(rawData);
    const category = req.query.category;
    if (category) {
      const filtered = products.filter((p) => p.category === category);
      return res.status(200).json(filtered);
    }
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Andmete lugemine ebaõnnestus" });
  }
});

//middleware
app.use(express.static(path.join(__dirname, "public")));
// Basic route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
