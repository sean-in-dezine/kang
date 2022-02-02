let cartbtn = document.querySelector('.cart')
cartbtn.addEventListener('click', cart)
let Cart = document.querySelector('.Cart')


function hideLeft() {
    let items = document.querySelectorAll('.left > div')
    for (const item of items) {
        console.log(item)
        item.style.display = 'none'
    }


}

function cart() {
    hideLeft()
    console.log(Cart)
    Cart.style.display = 'grid'


}

function hideCart() {
    Cart.style.display = 'none'
}