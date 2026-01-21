//getallproducts
import { Product } from "./constructors/product.js";

//kõik tooted
export const getProductsDataByCategory = async (category) => {
  try {
    // MUUDATUS: Lisame query parameetri otse URL-i lõppu
    const url =
      category && category !== "all"
        ? `/api/products?category=${encodeURIComponent(category)}`
        : "/api/products";

    const data = await fetch(url);

    const productsData = await data.json();
    const dataObject = productsData.map(
      (item) =>
        new Product(
          item.id,
          item.title,
          item.price,
          item.category,
          item.description,
          item.image,
        ),
    );

    return dataObject;
  } catch (error) {
    console.error(error);
  }
};
