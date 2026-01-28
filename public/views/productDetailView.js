import { cart } from "../constructors/cart.js ";
import { customer } from "../constructors/customer.js";
import { Product } from "../constructors/product.js";
import { getProductsDataByCategory } from "../api.js";
import { navigate } from "../router.js";
export const displayDetailView = async (i) => {
  const categoriesDiv = document.getElementsByClassName("categories");

  categoriesDiv.innerHTML = "";
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
              src="${products[i - 1].image}"
              alt=""
            />
          </div>
          <!-- all text -->
          <div>
           <p> ${products[i - 1].category}</p>
            <p>${products[i - 1].title}</p>
            <p>${products[i - 1].price}</p>
            <p>${products[i - 1].description}</p>
            <div class="buttons">
              <button    id="detailViewAddToCartButton" class="addToCart">lisa ostukorvi</button
              ><button  id="addToFavoritesButton" class="addToLiked"></button>
            </div>
          </div>
        </div>`;
  const favoriteButton = document.getElementById("addToFavoritesButton");

  const isActive = customer.isActive(products[i - 1]);
  if (isActive) {
    favoriteButton.innerHTML = "eemalda lemmikutest";
  } else if (!isActive) {
    favoriteButton.innerHTML = "lisa Lemmikutesse";
  }
  detailViewAddToCartButton.onclick = () => {
    cart.addProduct(products[i - 1], 1);
  };
  favoriteButton.onclick = () => {
    customer.addFavorite(products[i - 1], customer);
    navigate("productDetail", products[i - 1].id, false);
  };
  // tagasi nupp
  document.addEventListener("click", (event) => {
    if (event.target.id === "backButton") {
      navigate("allProducts", "all", true);
    }
  });
};
