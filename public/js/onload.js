let hide = document.querySelectorAll('.left > div')

function onload() {
    for (const x of hide) {
        x.style.display = 'none'
    }

    let title = document.querySelector('.title')
    let img = document.querySelector('.img')
    let info = document.querySelector('.info')

    title.style.display = 'grid'
    title.innerText = 'Welcome... please select something'
    // info.style.display = 'grid'
    // info.innerText = 'please select something'
    img.style.display = 'grid'
    img.style.background = `url('../img/samuel.jpg')`
    img.style.backgroundPosition = `center`
    img.style.backgroundRepeat = 'no-repeat'
    img.style.backgroundSize = `contain`

}
onload()