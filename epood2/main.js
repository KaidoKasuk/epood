import { Product } from "./constructors/product.js";

import { Cart } from "./constructors/cart.js";

import { Customer } from "./constructors/customer.js";

import { Order } from "./constructors/order.js";

import { displayAllProductsView } from "./views/allProductsView.js";
import { displayDetailView } from "./views/productDetailView.js";
import { displayCartView } from "./views/cartView.js";
import { displayFavorites } from "./views/favoritesView.js";

import { allProductsnavigate } from "/router.js";
// Loo mõned tooted
export const Products = [
  new Product(1, "Sülearvuti", 999.99, "Elektroonika"),
  new Product(2, "Telefon", 599.99, "Elektroonika"),
  new Product(3, "Seljakott", 100.99, "riided"),
  new Product(4, "Maci halb hiir", 100.99, "riided"),
  new Product(5, "Wallet", 100.99, "riided"),
  new Product(6, "Söögitool", 100.99, "riided"),
  new Product(7, "Joogipudel", 100.99, "riided"),
  new Product(8, "Hea Laadia", 100.99, "Elektroonika"),
  new Product(9, "Wallet", 100.99, "riided"),
  new Product(10, "Söögitool", 100.99, "riided"),
  new Product(11, "Joogipudel", 100.99, "riided"),
  new Product(12, "Hea Laadia", 100.99, "Elektroonika"),
  new Product(13, "Wallet", 100.99, "riided"),
  new Product(14, "Söögitool", 100.99, "riided"),
  new Product(15, "Joogipudel", 100.99, "riided"),
  new Product(16, "Hea Laadia", 100.99, "Elektroonika"),
];

// Loo ostukorv ja lisa tooted
const cart = new Cart();
cart.addProduct(Products[0], 2); // et toodet saada pead votma selle arrayst product, quantity
cart.addProduct(Products[1], 3);
console.log(cart);
console.log(Products[1].describe());

const order = new Order("29.11.25", cart);
console.log(order.printOrder());
console.log("Kogusumma:", cart.calculateTotal());
console.log("Kokku tooteid ostukorvis:", cart.totalItems);

// Loo klient ja esita tellimus
const customer = new Customer("Alice");

// console.log(order.printOrder());
customer.placeOrder(cart);

// Kuvage tellimuste ajalugu
customer.printOrderHistory();

// Praeguseks hardcoded lemmikud
customer.addFavorite(Products[0]);
customer.addFavorite(Products[1]);
console.log(customer);
//- - - - -- - - - -- - HEADERI NUPUD - - -- - - -- //
const homeButton = document.getElementById("toHomeButton");
const cartButton = document.getElementById("toCartButton");
const favoriteButton = document.getElementById("toFavoriteButton");
homeButton.addEventListener("click", (event) => {
  console.log("home");
});

//-----------------------VAATED---------------//
// displayAllProductsView(Products);
// displayDetailView(Products[1]);
// displayCartView(cart);
// displayFavorites(customer);
allProductsnavigate();
