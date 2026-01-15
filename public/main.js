import { Product } from "./constructors/product.js";
import { cart } from "./constructors/cart.js";
import { Customer } from "./constructors/customer.js";
import { customer } from "./constructors/customer.js";
import { Order } from "./constructors/order.js";

import { displayAllProductsView } from "./views/allProductsView.js";
import { displayDetailView } from "./views/productDetailView.js";
import { displayCartView } from "./views/cartView.js";
import { displayFavorites } from "./views/favoritesView.js";

import { allProductsnavigate } from "./router.js";
//backendist

//muudan json faili sisu globaalseks
// let toode;
// async function loadProducts() {
//   const data = await fetch("/data/products.json");
//   toode = await data.json();
// }
// await loadProducts();

const initApp = () => {};

// tooted
const Products = [];
//pushin tooted
// toode.forEach((toode) =>
//   Products.push(new Product(toode.id, toode.title, toode.price, toode.category))
// );

// export { Products };

// Products.push(value);
// cart.addProduct(Products[0], 2); // et toodet saada pead votma selle arrayst product, quantity
// cart.addProduct(Products[1], 3);
// console.log(cart);
// console.log(Products[1].describe());

// const order = new Order("29.11.25", cart);
// console.log(order.printOrder());
// console.log("Kogusumma:", cart.calculateTotal());
// console.log("Kokku tooteid ostukorvis:", cart.totalItems);

// Kuvage tellimuste ajalugu
// customer.printOrderHistory();

// console.log(customer);

//-----------------------VAATED---------------//
// displayAllProductsView(Products);
// displayDetailView(Products[1]);
// displayCartView(cart);
// displayFavorites(customer);
allProductsnavigate(displayAllProductsView(Products));
//- - - - -- - - - -- - HEADERI NUPUD - - -- - - -- //
const homeButton = document.getElementById("toHomeButton");
const cartButton = document.getElementById("toCartButton");
const favoriteButton = document.getElementById("toFavoriteButton");
const detailViewButton = document.getElementById(`${product.id}`);
//- - - - -- - - - -- - MAIN VAATES NUPUD - - -- - - -- //
// const addToCartButton = document.getElementById("addToCartButton");
const addToFavoritesButton = document.getElementById("addToFavoritesButton");
//- - - - -- - - - -- - DETAIL VAATES NUPUD - - -- - - -- //
//navigatsiooni menüü nupud
cartButton.addEventListener("click", (event) => {
  allProductsnavigate(displayCartView(cart));
});
homeButton.addEventListener("click", (event) => {
  allProductsnavigate(displayAllProductsView(Products));
});
favoriteButton.addEventListener("click", (event) => {
  allProductsnavigate(displayFavorites(customer));
});

//- - - - -- - - - -- - MAIN VAATES KAARDIL NUPUD - - -- - - -- //
document.addEventListener("click", (event) => {
  //logo peale nupu vajutus
  if (event.target.closest("#homeButton")) {
    allProductsnavigate(displayAllProductsView(Products));
  }
  const card = event.target.closest(".oneProduct");
  if (!card) return; //et iga kord event ei toimuks

  const id = Number(card.dataset.id);

  if (event.target.closest(".heartWrapper")) {
    return;
  }
  if (event.target.closest("button")) {
    cart.addProduct(Products[id - 1], 1);
    return;
  } else {
    displayDetailView(Products[id - 1]);
  }
});

//- -- - - -- - - -detail vaates nupud -------------//

// tagasi nupp
document.addEventListener("click", (event) => {
  if (event.target.id === "backButton") {
    allProductsnavigate(displayAllProductsView(Products));
  }
});

// - - --------OSTUKORV VAATES NUPUD- ------ //
document.addEventListener("click", (event) => {
  if (event.target.closest(".plusButton")) {
    console.log("plusbutton happend");
    //toote id mis cart.js läheb
    const productId = event.target.dataset.productId;
    // console.log(productId);
    cart.addProduct(Products[productId - 1], 1);
    //värskendab lehte, vist halb variant aga töötab :D
    allProductsnavigate(displayCartView(cart));
  }
  if (event.target.closest(".minusButton")) {
    // console.log("minusbutton happend");
    const productId = event.target.dataset.productId;

    cart.removeProduct(Products[productId - 1], 1);
    allProductsnavigate(displayCartView(cart));
    console.log(cart);
  }
  if (event.target.closest(".removeProduct")) {
    // console.log("product removed");
    const productId = event.target.dataset.productId;
    cart.deleteProduct(Products[productId - 1]);
    allProductsnavigate(displayCartView(cart));
    // console.log(cart);
  }
  if (event.target.closest("#clearAll")) {
    cart.clearAllItems();
    allProductsnavigate(displayCartView(cart));
  }
});
// - - -- -- - - -- Lemmikud- - - -- - - //

document.addEventListener("change", (event) => {
  if (!event.target.matches(".heartLabel")) return;

  const card = event.target.closest(".oneProduct");
  const svg = card.querySelector("svg");
  const id = Number(card.dataset.id);
  const product = Products[id - 1];
  const checkbox = event.target;

  if (event.target.checked) {
    customer.addFavorite(product, customer);

    const svg = checkbox.nextElementSibling;

    if (!svg) return;

    svg.classList.toggle("active", checkbox.checked);
  } else {
    // console.log("else happened");
    customer.removeFavorite(product, customer);
    svg.classList.toggle("active", checkbox.checked);
  }

  if (svg.classList.contains("YouAreInFavoriteView")) {
    allProductsnavigate(displayFavorites(customer));
  }
});

//dom kuulamine
document.addEventListener("DOMContentLoaded", initApp);
