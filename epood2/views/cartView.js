//funktsioon ostukorvi vaateks
export const displayCartView = (cart) => {
  //html osa
  const displayCartView = document.getElementById("product");
  //palju cartis ERINEVAID TOOTEID
  const cartLenght = cart.getAllProducts();
  //kui ostukorv tuhi
  if (cartLenght.length === 0) {
    displayCartView.innerHTML = `<p>Ostukorv on tuhi</p>`;
    return;
  }
  displayCartView.innerHTML += ` <div class="favoriteAllText">
          <p class="favoriteTitle">Ostukorv</p>
          <p>Tooteid kokku ${cartLenght.length}</p>
        </div>`;
  //toodete info automaatseks kuvamiseks
  let i = -1;
  //toodete kuvamine
  cartLenght.forEach((product) => {
    i++;
    displayCartView.innerHTML += `<div class="ostukorvForEach">
          <div class="eseKorvis">
           <div class="leftSide">
            <div>
              <img
                src="assets/Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops.png"
                alt=""
              />
            </div>
            <div>
              <p>${cart.items[i].product.title}</p>
              <p>${cart.items[i].product.category}</p>
              <p>${cart.items[i].product.price}</p>
            </div>
            </div>
            <div class="cartButtons">
              <button>eemalda ese</button>
               <div>
              <button>-</button>
              <label for="">placeholder</label>
              <button>+</button>
              </div>
            </div>
          </div>
        </div>`;
  });
  displayCartView.innerHTML += `<div class="ostukorviFooter">
          <div class="kakskordakolm">
            <p>vahesumma</p>
            <p>300</p>
            <p>soodukas:</p>
            <p>20%</p>
            <p>kokku</p>
            <p>200000</p>
          </div>
          <button class="osta">osta</button>
        </div>`;
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
