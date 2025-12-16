//funktsioon ostukorvi vaateks
export const displayFavorites = (customer) => {
  //html osa
  const displayFavorites = document.getElementById("product");
  //palju cartis ERINEVAID TOOTEID
  const favoriteLenght = customer.getFavorites();
  //kui ostukorv tuhi
  if (favoriteLenght.length === 0) {
    displayFavorites.innerHTML = `<p>Lemmikuid veel pole</p>`;
    return;
  }

  //toodete kuvamine
  favoriteLenght.forEach((product) => {
    displayFavorites.innerHTML += `<div class="ostukorvForEach">
          <div class="eseKorvis">
            <div>
              <img
                src="assets/Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops.png"
                alt=""
              />
            </div>
            <div>
              <p>${customer.favorites}</p>
              
            </div>
            <div>
              <button>eemalda ese</button>
              <button>-</button>
              <label for="">placeholder</label>
              <button>+</button>
            </div>
          </div>
        </div>`;
  });
};
/* <div class="ostukorvForEach">
          <div class="eseKorvis">
            <div>
              <img
                src="assets/Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops.png"
                alt=""
              />
            </div>
            <div>
              <p>${product.title}</p>
              <p>${product.category}</p>
              <p>${product.price}</p>
            </div>
            <div>
              <button>eemalda ese</button>
              <button>-</button>
              <label for="">placeholder</label>
              <button>+</button>
            </div>
          </div>
        </div>
        <!-- ostukorvi footer??? -->
        <div class="ostukorviFooter">
          <div class="kakskordakolm">
            <p>vahesumma</p>
            <p>300</p>
            <p>soodukas:</p>
            <p>20%</p>
            <p>kokku</p>
            <p>200000</p>
          </div>
          <button class="osta">osta</button>
        </div> */
