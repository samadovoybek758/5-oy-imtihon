import { creatCard , getDataFromApi} from "./function.js";

const goldensoft = document.getElementById('GoldenSoft')
const filter1 = document.querySelector('#filter_1');
const maxPrice = document.getElementById('maxPrice');
const minPrice = document.getElementById('minPrice');
const btnPrice = document.getElementById('btnPrice');
const goldensoft1 = document.getElementById('GoldenSoft1')





// fetch("https://cars-pagination.onrender.com/products?")




document.addEventListener('DOMContentLoaded',function (params) {
    getDataFromApi("https://cars-pagination.onrender.com/products?")
    // .then( res => res.json())
    .then(data => {
        const first10Cards = data.slice(1, 13);
        first10Cards && first10Cards.forEach(products => {
            let card = creatCard(products);
            goldensoft.innerHTML += card
        });

        const first4Cards = data.slice(1, 5);
        first4Cards && first4Cards.forEach(products => {
            let card = creatCard(products);
            goldensoft1.innerHTML += card
        });


        const card1 = document.querySelectorAll(".card")
        card1.length && card1.forEach(function (card) {
            card.addEventListener('click',function () {
               let id = this.getAttribute('data-id');
               let url = window.location.href.split('/index')[0];
               window.location.assign(`${url}/pages/details.html?id=${id}`)
            })
        })
    })   
    .catch(err =>{
        console.log(err);
    })
})







filter1 && filter1.addEventListener("change",function () {
    // fetch(`https://cars-pagination.onrender.com/products/category?category=${this.value}`)
    getDataFromApi(`https://cars-pagination.onrender.com/products/category?category=${this.value}`)
    // .then(res => res.json())
    .then(data => {
        const filterElement = data.slice(0, 12);
        goldensoft.innerHTML = ""

        filterElement && filterElement.forEach(function (element) {
            let card1 = creatCard(element)
            goldensoft.innerHTML += card1
        })


        const card1 = document.querySelectorAll(".card")
        card1.length && card1.forEach(function (card) {
            card.addEventListener('click',function () {
               let id = this.getAttribute('data-id');
               let url = window.location.href.split('/index')[0];
               window.location.assign(`${url}/pages/details.html?id=${id}`)
            })
        })
    })
    .catch(err =>{
        console.log(err);
    })
})


btnPrice && btnPrice.addEventListener('click',function (params) {
    params.preventDefault()

    fetch(`https://cars-pagination.onrender.com/products/filter?minPrice=${minPrice.value}&maxPrice=${maxPrice.value}`)
    .then(res => res.json())
    // getDataFromApi(`https://cars-pagination.onrender.com/products/filter?minPrice=${minPrice.value}&maxPrice=${maxPrice.value}`)
    .then(data1 => {
        const filter2Element = data1.slice(0, 12);
        goldensoft.innerHTML = ""

        filter2Element && filter2Element.forEach(function (params) {
            let card2 = creatCard(params)
            goldensoft.innerHTML += card2
        })

        
        const card1 = document.querySelectorAll(".card")
        card1.length && card1.forEach(function (card) {
            card.addEventListener('click',function () {
               let id = this.getAttribute('data-id');
               let url = window.location.href.split('/index')[0];
               window.location.assign(`${url}/pages/details.html?id=${id}`)
            })
        })
    })
    .catch(err =>{
        console.log(err);
    })
})

