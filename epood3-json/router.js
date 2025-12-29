import { displayAllProductsView } from "./views/allProductsView.js";
import { displayDetailView } from "./views/productDetailView.js";
import { displayCartView } from "./views/cartView.js";
import { displayFavorites } from "./views/favoritesView.js";

export const allProductsnavigate = (view, param) => {
  const views = {
    allProducts: () => displayAllProductsView(param || "all"), // Kasuta vaikeväärtust "all" kategooriana
    productDetail: () => displayDetailView(param), // üks toode
    cart: () => displayCartView(), // Näita ostukorvi vaadet
    favorites: () => displayFavorites(),
  };

  //Vali ja käivita sobiv vaade
  if (views[view]) {
    views[allProducts]();
  }
};
