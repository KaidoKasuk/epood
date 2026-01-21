import { displayAllProductsView } from "./views/allProductsView.js";
import { displayDetailView } from "./views/productDetailView.js";
import { displayCartView } from "./views/cartView.js";
import { displayFavorites } from "./views/favoritesView.js";

export const navigate = (view, param, pushState = true) => {
  const views = {
    allProducts: () => displayAllProductsView(param || "all"), // Kasuta vaikeväärtust "all" kategooriana
    productDetail: () => displayDetailView(param), // üks toode
    cart: () => displayCartView(), // Näita ostukorvi vaadet
    favorites: () => displayFavorites(),
  };

  //Vali ja käivita sobiv vaade
  if (views[view]) {
    views[view]();
  }
  const constructUrl = (view, param) => {
    switch (view) {
      case "allProducts":
        return param && param !== "all" ? `/category/${param}` : "/";
      case "productDetail":
        return `/product/${param}`;
      case "cart":
        return "/cart";
      case "favorites":
        return "/favorites";
      default:
        return "/";
    }
  };
  if (pushState) {
    const url = constructUrl(view, param);
    window.history.pushState({ view, param }, "", url);
  }
};
