const fs = require("fs").promises; // async fs methods
const path = require("path");

const fetchAndSaveProducts = async (file) => {
  const response = await fetch("https://fakestoreapi.com/products");

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const products = await response.json();

  await fs.writeFile(file, JSON.stringify(products, null, 2));

  console.log("Products saved successfully!");
  return;
};

module.exports = fetchAndSaveProducts;
