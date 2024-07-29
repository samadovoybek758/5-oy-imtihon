import { getDataFromApi } from "./function.js";

const newPrice = document.getElementById('newPrice');
const aname = document.getElementById('name');
const oldPrice = document.getElementById('oldPrice');
const imgDetails = document.getElementById('imgDetails');
const card = document.getElementById('card');
const loader = document.getElementById('loader');
let btn = document.getElementById('btn');

// function getDataFromCart() {
//     let data = []
//     if (localStorage.getItem('cart')) {
//         data = JSON.parse(localStorage.getItem('cart'))
//     }
// }
function getDataFromCart() {
    const cartData = localStorage.getItem("cart");
    return cartData ? JSON.parse(cartData) : [];
  }

document.addEventListener('DOMContentLoaded',function () {
    let url1 = window.location.href
    let find_id = url1.indexOf('id=')
    let id = url1.substring(find_id +3)
    
    if (id) {
        // fetch(`https://cars-pagination.onrender.com/products/${id}`)
        // .then(res => res.json())
        getDataFromApi(`https://cars-pagination.onrender.com/products/${id}`)
        .then(data =>{
            if (data.id) {
                imgDetails.setAttribute('src',data.image)
                aname.innerHTML = data.name;
                newPrice.innerHTML ="$" + data.newPrice;
                oldPrice.innerHTML ="$" + data.oldPrice;

                console.log(data.image);
                btn.addEventListener('click', function (params) {
                    params.preventDefault()
                    console.log(data.id);
                    let product = {
                        img : data.image,
                        id : data.id,
                        name : data.name,
                        price : data.newPrice
                    }

                    let datacart2 =[]
                    datacart2 = getDataFromCart()

                    datacart2.push(product)


                    localStorage.setItem("cart",JSON.stringify(datacart2))

                    let url = window.location.href.split('/pages')[0];
                    window.location.assign(`${url}/pages/cart.html?`)
                })
            }
           
        })
        .catch(err =>{
            console.log(err);
        })
        .finally(function () {
            card.style.display = "flex";
            loader.style.display = "none"

        })
    }else{
        window.location.assign("http://127.0.0.1:5500/index.html")
    }
})