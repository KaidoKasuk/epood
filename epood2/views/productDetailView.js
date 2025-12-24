import { cart } from "../constructors/cart.js ";

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
              ><button  id="addToFavoritesButton" class="addToLiked">lisa lemmikuks</button>
            </div>
          </div>
        </div>`;

  detailViewAddToCartButton.onclick = () => {
    cart.addProduct(product, 1);
    console.log(cart);
  };
};
