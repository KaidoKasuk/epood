import { cart } from "../constructors/cart.js";
import { Products } from "../main.js";

//funktsioon ostukorvi vaateks
export const displayCartView = (cart) => {
  //html osa
  const displayCartView = document.getElementById("product");
  //kustuda vaated
  displayCartView.innerHTML = "";
  //palju cartis ERINEVAID TOOTEID
  const cartLenght = cart.getAllProducts();
  //kui ostukorv tuhi
  if (cartLenght.length === 0) {
    displayCartView.innerHTML = `<p>Ostukorv on tuhi</p>`;
    return;
  }
  displayCartView.innerHTML += ` <div class="favoriteAllText">
          <p class="favoriteTitle">Ostukorv</p>
          <p id="allProductsCount">Tooteid kokku ${cart.totalItems}</p>
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
               <div id="${i}">
              <button id="minusButton" >-</button>
                <span id="${cart.items[i].product.id}">${cart.items[i].quantity}</span>
              <button id="plusButton" >+</button>
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
  const plusbutton = document.getElementById("plusButton");
  const index = document.getElementById(i);

  plusbutton.onclick = () => {
    console.log(index.id);
    cart.addProduct(cart.items[index.id], 1);

    upDate();
  };

  const minusButton = document.getElementById("minusButton");
  minusButton.onclick = () => {
    if (cart.items[i].quantity > 0) {
      cart.removeProduct(cart.items[i].product, 1);
      console.log(cart);
    }
    upDate();
  };

  function upDate() {
    console.log(cart.items[i].product.id);
    const specificCount = document.getElementById(cart.items[i].product.id);
    const allProductsCount = document.getElementById("allProductsCount");
    specificCount.innerHTML = ` `;
    specificCount.innerHTML = `${cart.items[i].quantity}`;
    allProductsCount.innerHTML = ``;
    allProductsCount.innerHTML += ` Tooteid kokku ${cart.totalItems}`;
  }
};
