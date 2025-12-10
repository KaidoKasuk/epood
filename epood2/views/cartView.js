import { cartConstructor } from "../constructors/cart.js";

//opetaja oma
const cart = cartConstructor.getAllProducts();

export const displayCartView = (cart) => {
  const displayCartView = document.getElementById("product");

  products.forEach((product) => {
    displayCartView.innerHTML += `<div class="ostukorvForEach">
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
