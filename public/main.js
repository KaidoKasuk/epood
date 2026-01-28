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
  //- - - - -- - - - -- - HEADERI NUPUD - - -- - - -- //
  const homeButton = document.getElementById("toHomeButton");
  const mainHomeButton = document.getElementById("homeButton");
  const cartButton = document.getElementById("toCartButton");
  const favoriteButton = document.getElementById("toFavoriteButton");
  //- - - - -- - - - -- - MAIN VAATES NUPUD - - -- - - -- //
  const addToFavoritesButton = document.getElementById("addToFavoritesButton");

  //logo peale nupu vajutus ja header
  document.addEventListener("click", (event) => {
    if (event.target.closest("#toHomeButton")) {
      navigate("allProducts", "all");
    }
    if (event.target.closest("#homeButton")) {
      navigate("allProducts", "all");
    }

    if (event.target.closest("#toCartButton")) {
      navigate("cart", cart);
    }

    if (event.target.closest("#toFavoriteButton")) {
      navigate("favorites", customer);
    }
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
