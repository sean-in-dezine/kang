let addcart = document.querySelector('.addcart')
addcart.addEventListener('click', addCart)

function addCart() {
    // get quantity
    let qty = document.querySelector('.qty')
    let x = qty.innerText
    x = parseInt(x, 10)


    // get item
    let title = document.querySelector('.title').innerText

    // make appear in cart
    let item = document.createElement('div')
    item.classList = 'cart_item', title


    // update that item's classname in html

    // this is so no negative numbers are added in
    if (x > 0) {
        // add to cart here
        Cart.appendChild(item)

    }

    // update item titles, add to new item element in Cart
    let item_title = document.createElement('div')
    let item_quantity = document.createElement('div')
    item_title.innerText = title
    item_title.classList = 'item_title', title
    item_quantity.innerText = x
    item_quantity.classList = 'item_quantity', title
    item.appendChild(item_quantity)
    item.appendChild(item_title)

    // add item remove button
    let remove = document.createElement('div')
    remove.innerText = "remove"
    remove.classList = 'remove', title
    item.appendChild(remove)

}