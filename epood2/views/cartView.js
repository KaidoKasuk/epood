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
              <button class="removeProduct" data-product-id="${cart.items[i].product.id} " >eemalda ese</button>
               <div id="${i}">
              <button class="minusButton" data-product-id="${cart.items[i].product.id} ">-</button>
                <span ">${cart.items[i].quantity}</span>
              <button class="plusButton" data-product-id="${cart.items[i].product.id}">+</button>
              </div>
            </div>
          </div>
        </div>`;
  });
  displayCartView.innerHTML += `<div class="ostukorviFooter">
          <div class="kakskordakolm">
            <p>vahesumma</p>
            <p>${cart.calculateTax()}</p>
            <p>Käibemaks:</p>
            <p>22%</p>
            <p>kokku</p>
            <p>${cart.calculateTotal()}</p>
          </div>
          <button class="osta">osta</button>
        </div>`;

  const index = document.getElementById(i);
};
