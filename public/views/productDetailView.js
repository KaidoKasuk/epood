import { cart } from "../constructors/cart.js ";
import { customer } from "../constructors/customer.js";
import { Product } from "../constructors/product.js";
import { getProductsDataByCategory } from "../api.js";
import { navigate } from "../router.js";
export const displayDetailView = async (id) => {
  //toon tooted
  const products = await getProductsDataByCategory();
  //lisan ekstra divi css jaoks
  const detailWrapper = document.createElement("div");
  detailWrapper.className = "detailWrapper";
  const detailView = document.getElementById("product");
  detailView.innerHTML = "";
  detailView.appendChild(detailWrapper);

  detailWrapper.innerHTML = "";
  detailWrapper.innerHTML += `<button id="backButton" class="tagasi">tagasi</button>
        <div class="detailView">
          <div id="pictureDiv">
            <img
              src="${products[id].image}"
              alt=""
            />
          </div>
          <!-- all text -->
          <div>
           <p> ${products[id].category}</p>
            <p>${products[id].title}</p>
            <p>${products[id].price}</p>
            <p>${products[id].description}</p>
            <div class="buttons">
              <button    id="detailViewAddToCartButton" class="addToCart">lisa ostukorvi</button
              ><button  id="addToFavoritesButton" class="addToLiked"></button>
            </div>
          </div>
        </div>`;
  const favoriteButton = document.getElementById("addToFavoritesButton");

  const isActive = customer.isActive(product);
  if (isActive) {
    favoriteButton.innerHTML = "eemalda lemmikutest";
  } else if (!isActive) {
    favoriteButton.innerHTML = "lisa Lemmikutesse";
  }
  detailViewAddToCartButton.onclick = () => {
    cart.addProduct(product, 1);
  };
  addToFavoritesButton.onclick = () => {
    customer.addFavorite(product, customer);
    displayDetailView(product);
  };
  // tagasi nupp
  document.addEventListener("click", (event) => {
    if (event.target.id === "backButton") {
      navigate("allProducts", "all", false);
    }
  });
};
