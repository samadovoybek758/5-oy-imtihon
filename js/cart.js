import { getDAta,creatCart } from "./function.js"

const wrapper = document.getElementById('wrapper');





document.addEventListener('DOMContentLoaded',function (params) {
    let cartdata = getDAta()
        if (cartdata.length) {
            cartdata.forEach(product => {
                let cart = creatCart(product);
                wrapper.innerHTML += cart;
            });

        const deletBtn = document.querySelectorAll('.deletBtn');
        deletBtn.forEach(function (delet) {
           
            delet && delet.addEventListener("click",function (params) {
                let id = this.getAttribute("data-id");
                let isdelet = confirm("uchirmoqchimisz")
                if (isdelet && id) {
                    this.parentNode.parentNode.parentNode.remove()
                    cartdata = cartdata.filter(function (el) {
                        return el.id != id
                    })
                localStorage.setItem('cart',JSON.stringify(cartdata))
                }
                })
            })
    }


    

   

    
    
})



