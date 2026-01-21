//konstrukturite importid
import { Product } from "./constructors/product.js";
import { cart } from "./constructors/cart.js";
import { Customer } from "./constructors/customer.js";
import { customer } from "./constructors/customer.js";
import { Order } from "./constructors/order.js";
//vaate importid
import { displayAllProductsView } from "./views/allProductsView.js";
import { displayDetailView } from "./views/productDetailView.js";
import { displayCartView } from "./views/cartView.js";
import { displayFavorites } from "./views/favoritesView.js";
//muu import
import { navigate } from "./router.js";

const initApp = () => {
  //muudan json faili sisu globaalseks
  let toode;
  async function loadProducts() {
    const data = await fetch("/api/products");
    toode = await data.json();
  }
  loadProducts();

  // tooted
  const Products = [];
  Products.push(toode);
  //vaate tööle panemine
  // navigate(displayAllProductsView(Products));
  //- - - - -- - - - -- - HEADERI NUPUD - - -- - - -- //
  const homeButton = document.getElementById("toHomeButton");
  const cartButton = document.getElementById("toCartButton");
  const favoriteButton = document.getElementById("toFavoriteButton");
  const detailViewButton = document.getElementById(`${product.id}`);
  //- - - - -- - - - -- - MAIN VAATES NUPUD - - -- - - -- //
  // const addToCartButton = document.getElementById("addToCartButton");
  const addToFavoritesButton = document.getElementById("addToFavoritesButton");

  //navigatsiooni menüü nupud
  cartButton.addEventListener("click", (event) => {
    console.log(cart);
    navigate("cart", cart);
  });
  homeButton.addEventListener("click", (event) => {
    navigate("allProducts");
  });
  favoriteButton.addEventListener("click", (event) => {
    navigate("favorites", customer);
  });

  const path = window.location.pathname;

  // 2. Otsusta, millist vaadet näidata
  if (path === "/favorites") {
    navigate("favorites", null, false);
  } else if (path === "/cart") {
    navigate("cart", null, false);
  } else if (path.startsWith("/product/")) {
    const id = path.split("/").pop();
    navigate("productDetail", id, false);
  } else if (path.startsWith("/category/")) {
    const cat = path.split("/").pop();
    navigate("allProducts", cat, false);
  } else {
    // Vaikimisi esileht
    navigate("allProducts", "all", false);
  }
};
//dom kuulamine
document.addEventListener("DOMContentLoaded", initApp);
