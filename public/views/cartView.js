import { cart } from "../constructors/cart.js";
import { customer, Customer } from "../constructors/customer.js";
import { getProductsDataByCategory } from "../api.js";

//funktsioon ostukorvi vaateks
export const displayCartView = async () => {
  const products = await getProductsDataByCategory();

  //html osa
  const displayCartView = document.getElementById("product");
  //kustuda vaated
  displayCartView.innerHTML = "";
  //palju cartis ERINEVAID TOOTEID
  const cartLenght = cart.getAllProducts();
  //kui ostukorv tuhi
  if (cartLenght.length === 0) {
    displayCartView.innerHTML = `<p id="emptyCart" >Ostukorv on tuhi</p>`;
    return;
  } else
    displayCartView.innerHTML = `<div class="favoriteAllText">
          <p class="favoriteTitle">Ostukorv</p>
          <p id="allProductsCount">Tooteid kokku ${cart.totalItems}</p>
          
        </div>`;
  //toodete info automaatseks kuvamiseks
  let i = -1;

  //lisan ekstra divi css jaoks
  const cartWrapper = document.createElement("div");
  cartWrapper.className = "cartWrapper";
  displayCartView.appendChild(cartWrapper);
  //toodete kuvamine
  cartLenght.forEach((product) => {
    i++;
    cartWrapper.innerHTML += `<div class="ostukorvForEach">
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
  <button id="clearAll" >Kustuda kõik tooted💀</button>
          <div class="kakskordakolm">
            <p>vahesumma</p>
            <p>${cart.calculateTax()}</p>
            <p>Käibemaks:</p>
            <p>22%</p>
            <p>kokku</p>
            <p>${cart.calculateTotal()}</p>
          </div>
          <button id="finalBuy" class="osta">osta</button>
        </div>`;

  const index = document.getElementById(i);
  finalBuy.onclick = () => {
    customer.placeOrder(cart);
  };

  // - - --------OSTUKORVI VAATES NUPUD- ------ //
  document.addEventListener("click", (event) => {
    if (event.target.closest(".plusButton")) {
      console.log("plusbutton happend");
      //toote id mis cart.js läheb
      const productId = event.target.dataset.productId;
      // console.log(productId);
      cart.addProduct(Products[productId - 1], 1);
      //värskendab lehte, vist halb variant aga töötab :D
      navigate(displayCartView(cart));
    }
    if (event.target.closest(".minusButton")) {
      // console.log("minusbutton happend");
      const productId = event.target.dataset.productId;

      cart.removeProduct(Products[productId - 1], 1);
      navigate(displayCartView(cart));
      console.log(cart);
    }
    if (event.target.closest(".removeProduct")) {
      // console.log("product removed");
      const productId = event.target.dataset.productId;
      cart.deleteProduct(Products[productId - 1]);
      navigate(displayCartView(cart));
      // console.log(cart);
    }
    if (event.target.closest("#clearAll")) {
      cart.clearAllItems();
      navigate(displayCartView(cart));
    }
  });
};
