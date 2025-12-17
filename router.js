import { displayAllProductsView } from "./epood2/views/allProductsView.js";
import { displayDetailView } from "./epood2/views/productDetailView.js";
import { displayCartView } from "./epood2/views/cartView.js";
import { displayFavorites } from "./epood2/views/favoritesView.js";

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
