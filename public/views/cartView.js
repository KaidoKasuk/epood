import { cart } from "../constructors/cart.js";
import { customer, Customer } from "../constructors/customer.js";
import { getProductsDataByCategory } from "../api.js";
import { navigate } from "../router.js";
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

  //funktsioonid
  window.plusButton = function () {
    console.log("plusbutton happend");
    //toote id mis cart.js läheb
    const productId = event.target.dataset.productId;
    cart.addProduct(products[productId - 1], 1);
    //värskendab lehte, vist halb variant aga töötab :D
    navigate("cart", cart);
  };
  window.minusButton = function () {
    const productId = event.target.dataset.productId;
    cart.removeProduct(products[productId - 1], 1);
    navigate("cart", cart);
  };

  window.removeProduct = function () {
    if (event.target.closest(".removeProduct")) {
      // console.log("product removed");
      const productId = event.target.dataset.productId;
      cart.deleteProduct(products[productId - 1]);
      navigate("cart", cart);
      // console.log(cart);
    }
  };
  window.clearAll = function () {
    if (event.target.closest("#clearAll")) {
      cart.clearAllItems();
      navigate("cart", cart);
    }
  };

  window.placeOrder = function () {
    customer.placeOrder(cart);
  };
  cartLenght.forEach((product) => {
    i++;
    cartWrapper.innerHTML += `<div class="ostukorvForEach">
          <div class="eseKorvis">
           <div class="leftSide">
            <div>
              <img
                src="${cart.items[i].product.image}"
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
              <button class="removeProduct" data-product-id="${cart.items[i].product.id}"  onclick="removeProduct()">eemalda ese</button>
               <div id="${i}">
              <button class="minusButton" data-product-id="${cart.items[i].product.id}"  onclick="minusButton()">-</button>
                <span ">${cart.items[i].quantity}</span>
              <button class="plusButton" data-product-id="${cart.items[i].product.id}" onclick="plusButton()">+</button>
              </div>
            </div>
          </div>
        </div>`;
  });
  displayCartView.innerHTML += `<div class="ostukorviFooter">
  <button id="clearAll" onclick="clearAll()">Kustuda kõik tooted💀</button>
          <div class="kakskordakolm">
            <p>vahesumma</p>
            <p>${cart.calculateTax()}</p>
            <p>Käibemaks:</p>
            <p>22%</p>
            <p>kokku</p>
            <p>${cart.calculateTotal()}</p>
          </div>
          <button id="finalBuy" onclick="placeOrder()" class="osta">osta</button>
        </div>`;
};
