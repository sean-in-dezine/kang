import kang from './front-kang/front-kang.js'

// log message, reason for message, and (optional) trace message
function kanglog(message, reason = 'not set', trace = false) {
    console.log(`\n\n%cKANG [main.js]: ` + `%c${message}`, 'background: #222; color: #bada55', 'background: darkgreen; color: #ffffff')
    let x = new Error().stack.split('\n')[2]
    console.log(`%c${reason} ` + `%c@@@@ ${x}`, 'background: #222; color: #ffffff', 'background: darkgreen; color: #ffffff')
    if (trace !== false) {
        console.trace(trace)
    }
}


let user = {
    code: {
        name: 'sean',
        status: 'gangster'
    },
    db: {
        collection: 'Collection',
        action: 'Action'
    }
}

let element = document.querySelector("#nav > ul > li:nth-child(1)")

const result = () => {
    return kanglog('Result function', 'placeholder')
}




kang.fetch('/api', user, element, result(), {
    method: 'get'
})