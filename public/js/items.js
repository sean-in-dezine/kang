let items = document.querySelectorAll('.item')

for (const item of items) {
    item.addEventListener('click', update)
}

function update(ev) {
    hideCart()
    let x = ev.target.classList

    if (x.contains('fauci')) {
        appear()
        let title = document.querySelector('.title')
        let img = document.querySelector('.img')
        let info = document.querySelector('.info')
        title.innerText = 'fauci'
        img.style.background = `url('../img/fauci.jpg')`
        img.style.backgroundPosition = `center`
        img.style.backgroundRepeat = 'no-repeat'
        img.style.backgroundSize = `contain`
    }
    if (x.contains('broccoli')) {
        appear()
        let title = document.querySelector('.title')
        let img = document.querySelector('.img')
        let info = document.querySelector('.info')
        title.innerText = 'broccoli'
        img.style.background = `url('../img/broccoli.jpg')`
        img.style.backgroundPosition = `center`
        img.style.backgroundRepeat = 'no-repeat'
        img.style.backgroundSize = `contain`
    }
    if (x.contains('radish')) {
        appear()
        let title = document.querySelector('.title')
        let img = document.querySelector('.img')
        let info = document.querySelector('.info')
        title.innerText = 'radish'
        img.style.background = `url('../img/radish.jpeg')`
        img.style.backgroundPosition = `center`
        img.style.backgroundRepeat = 'no-repeat'
        img.style.backgroundSize = `contain`
    }
    if (x.contains('sunflower')) {
        appear()
        let title = document.querySelector('.title')
        let img = document.querySelector('.img')
        let info = document.querySelector('.info')
        title.innerText = 'sunflower'
        img.style.background = `url('../img/sunflower.jfif')`
        img.style.backgroundPosition = `center`
        img.style.backgroundRepeat = 'no-repeat'
        img.style.backgroundSize = `contain`
    }
    if (x.contains('pea')) {
        appear()
        let title = document.querySelector('.title')
        let img = document.querySelector('.img')
        let info = document.querySelector('.info')
        title.innerText = 'pea'
        img.style.background = `url('../img/pea.jpg')`
        img.style.backgroundPosition = `center`
        img.style.backgroundRepeat = 'no-repeat'
        img.style.backgroundSize = `contain`
    }
    if (x.contains('kale')) {
        appear()
        let title = document.querySelector('.title')
        let img = document.querySelector('.img')
        let info = document.querySelector('.info')
        title.innerText = 'kale'
        img.style.background = `url('../img/kale.jfif')`
        img.style.backgroundPosition = `center`
        img.style.backgroundRepeat = 'no-repeat'
        img.style.backgroundSize = `contain`
    }
    if (x.contains('spicy')) {
        appear()
        let title = document.querySelector('.title')
        let img = document.querySelector('.img')
        let info = document.querySelector('.info')
        title.innerText = 'spicy'
        img.style.background = `url('../img/spicy.jfif')`
        img.style.backgroundPosition = `center`
        img.style.backgroundRepeat = 'no-repeat'
        img.style.backgroundSize = `contain`
    }
    if (x.contains('banana')) {
        appear()
        let title = document.querySelector('.title')
        let img = document.querySelector('.img')
        let info = document.querySelector('.info')
        title.innerText = 'banana'
        img.style.background = `url('../img/banana.jpeg')`
        img.style.backgroundPosition = `center`
        img.style.backgroundRepeat = 'no-repeat'
        img.style.backgroundSize = `contain`
    }
    if (x.contains('peacock')) {
        appear()
        let title = document.querySelector('.title')
        let img = document.querySelector('.img')
        let info = document.querySelector('.info')
        title.innerText = 'peacock'
        img.style.background = `url('../img/peacock.jpg')`
        img.style.backgroundPosition = `center`
        img.style.backgroundRepeat = 'no-repeat'
        img.style.backgroundSize = `contain`
    }
    if (x.contains('gates')) {
        appear()
        let title = document.querySelector('.title')
        let img = document.querySelector('.img')
        let info = document.querySelector('.info')
        title.innerText = 'gates'
        img.style.background = `url('../img/gates.jpg')`
        img.style.backgroundPosition = `center`
        img.style.backgroundRepeat = 'no-repeat'
        img.style.backgroundSize = `contain`
    }
    if (x.contains('biden')) {
        appear()
        let title = document.querySelector('.title')
        let img = document.querySelector('.img')
        let info = document.querySelector('.info')
        title.innerText = 'biden'
        img.style.background = `url('../img/biden.jfif')`
        img.style.backgroundPosition = `center`
        img.style.backgroundRepeat = 'no-repeat'
        img.style.backgroundSize = `contain`
    }
    if (x.contains('samuel')) {
        appear()
        let title = document.querySelector('.title')
        let img = document.querySelector('.img')
        let info = document.querySelector('.info')
        title.innerText = 'samuel'
        img.style.background = `url('../img/samuel.jpg')`
        img.style.backgroundPosition = `center`
        img.style.backgroundSize = `contain`
        img.style.backgroundRepeat = 'no-repeat'
    }
}