export const displayAllProductsView = (products) => {
  //võtan htmli
  const displayAllProductsView = document.getElementById("product");
  //kustudada eelmine vaade
  displayAllProductsView.innerHTML = "";
  //lisan ekstra divi css jaoks
  const wrapper = document.createElement("div");
  wrapper.className = "allProductsWrapper";
  displayAllProductsView.appendChild(wrapper);
  //for eaching iga toote kaardi
  products.forEach((product) => {
    wrapper.innerHTML += ` <div class="oneProduct" id="${product.id}">
            <label class="heartWrapper">
             <input type="checkbox" class="heartLabel">
              <svg
              class="heartInProduct"
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill=""
              >
                <path
                  d="M28.84 12.61C28.3292 12.099 27.7228 11.6936 27.0554 11.4171C26.3879 11.1405 25.6725 10.9982 24.95 10.9982C24.2275 10.9982 23.5121 11.1405 22.8446 11.4171C22.1772 11.6936 21.5708 12.099 21.06 12.61L20 13.67L18.94 12.61C17.9083 11.5783 16.509 10.9987 15.05 10.9987C13.591 10.9987 12.1917 11.5783 11.16 12.61C10.1283 13.6417 9.54871 15.041 9.54871 16.5C9.54871 17.959 10.1283 19.3583 11.16 20.39L12.22 21.45L20 29.23L27.78 21.45L28.84 20.39C29.351 19.8792 29.7563 19.2728 30.0329 18.6053C30.3095 17.9379 30.4518 17.2225 30.4518 16.5C30.4518 15.7775 30.3095 15.0621 30.0329 14.3946C29.7563 13.7272 29.351 13.1208 28.84 12.61Z"
                  stroke="#0A0A0A"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </label>
            <img
              class="productImage"
              src="./assets/Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops.png"
              alt="Backpack"
            />

            <div>
              <h5>${product.category}</h5>
              <p class="productTitle">${product.title}</p>
              <div class="score">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                >
                  <path
                    d="M7.33335 0.666687L9.39335 4.84002L14 5.51335L10.6667 8.76002L11.4534 13.3467L7.33335 11.18L3.21335 13.3467L4.00002 8.76002L0.666687 5.51335L5.27335 4.84002L7.33335 0.666687Z"
                    fill="#0A0A0A"
                    stroke="#0A0A0A"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p>4.2 (120)</p>
              </div>
              ${product.price}$
              <button class="buyButton">buy</button>
            </div>
          </div>
          
        `;
  });
};
