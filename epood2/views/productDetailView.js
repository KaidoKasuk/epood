import { cart } from "../constructors/cart.js ";
import { customer } from "../constructors/customer.js";
import { Product } from "../constructors/product.js";
export const displayDetailView = (product) => {
  const detailView = document.getElementById("product");
  detailView.innerHTML = "";
  detailView.innerHTML += `<button id="backButton" class="tagasi">tagasi</button>
        <div class="detailView">
          <div>
            <img
              src="./assets/Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops.png"
              alt=""
            />
          </div>
          <!-- all text -->
          <div>
           <p> ${product.category}</p>
            <p>${product.title}</p>
            <p>${product.price}</p>
            <p>kirjeldus looorem</p>
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
    console.log(product);
    customer.addFavorite(product, customer);
    displayDetailView(product);
    console.log("display check");
  };
};
