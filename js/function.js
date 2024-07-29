


async function getDataFromApi(url) {
    try{
      let response = await fetch(url)
      let data = []
      if (response.status == 200) {
          data = await response.json()
      }
      return data
    }catch (err){
        console.log(err);
    }
}




function creatCard(products) {
  return `
    <div class="card" id="card" data-id="${products.id}">
         <div class="overlay">
           <img class = "img1" src="${products.image}" alt="">
            <div class="overlay1">
                 <div>
                    <p class="tag">${products.isExist}</p>
                    <img src="./images/podarok.png" alt="">
                </div>
                <img src="./images/sale.png" alt="">
            </div>
        </div>
        <div class="cardOsti">
            <div class="stars">
                <img src="images/Frame (1).png" alt="">
                <img src="images/Frame (1).png" alt="">
                <img src="images/Frame (1).png" alt="">
                <img src="images/Frame (1).png" alt="">
                <img src="images/Frame (1).png" alt="">
                <span>${products.comments} отзывов</span>
            </div>
            <p>${products.name}</p>
            <div class="cost-3">
                <span>$${products.newPrice}</span>
                <span class="cost-4">$${products.oldPrice}</span>
            </div>
    </div>
    `;
}

function getDAta() {
  let data = [];
  if (localStorage.getItem("cart")) {
    data = JSON.parse(localStorage.getItem("cart"));
  }
  return data;
}


function creatCart(product) {
  return`
  <div id="cart" >
         <div class="korzina">
              <p>Корзина</p>
              <img src="../images/Frame (2).svg" alt="">
         </div>
         <div class="cardMin">
              <img src="${product.img}" alt="">
              <div class="cartName">
                  <p>${product.name}</p>
                  <p>+ Подарок: <span class="cartNameSpan">“Приложение к замкам Golden Service”</span></p>
                  <select id="select">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>

                  </select>
              </div>
              <div class="udalit">
                  <div class="deletBtn" data-id="${product.id}">
                      <img src="../images/Frame (3).svg" alt="">
                      <span>Удалить</span>
                  </div>
                 <p>$${product.price}</p>

              </div>
         </div>

         <h4>Итого: <span class="itogo">$${product.price}</span></h4>

         <div class="buttons">
              <button id="btnBlue">Оформить заказ</button>
              <button id="btnWhite">Продолжить покупки</button>
         </div>
  </div>
     
  `
}


export { creatCard, getDAta,getDataFromApi,creatCart };
