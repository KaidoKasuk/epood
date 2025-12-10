export const displayDetailView = (product) => {
  const detailView = document.getElementById("product");

  detailView.innerHTML += `<button class="tagasi">tagasi</button>
        <div class="detailView">
          <div>
            <img
              src="./assets/Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops.png"
              alt=""
            />
          </div>
          <!-- all text -->
          <div>
            ${product.category}
            <p>${product.title}</p>
            <p>${product.price}</p>
            <p>kirjeldus looorem</p>
            <div class="buttons">
              <button class="addToCart">lisa ostukorvi</button
              ><button class="addToLiked">lisa lemmikuks</button>
            </div>
          </div>
        </div>`;
};
