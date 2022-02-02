let less = document.querySelector('.less')
let qty = document.querySelector('.qty')
let more = document.querySelector('.more')

qty.innerText = '2'

less.addEventListener('click', subtract)
more.addEventListener('click', add)

function subtract() {
    let x = qty.innerText
    if (x >= 1) {
        x = parseInt(x, 10)
        x = x - 1
        qty.innerText = x
    }
}

function add() {
    let x = qty.innerText
    x = parseInt(x, 10)
    x = x + 1
    qty.innerText = x
}