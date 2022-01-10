function kanglog(message, reason = 'not set', trace = false) {
    console.log(`\n\n%cKANG [front-kang.js]: ` + `%c${message}`, 'background: #222; color: #bada55', 'background: darkblue; color: #13bdec')
    let x = new Error().stack.split('\n')[2]
    console.log(`%c${reason}` + `%c @@@@ ${x}`, 'background: #222; color: white', 'background: darkblue; color: #ffffff')
    if (trace !== false) {
        console.trace(trace)
    }
}


const kang = {

    // ! turn fetch into a promise!!!!! otherwise data not accessible without framework
    fetch: function (url, object, domelement = 'none', result = 'none', options = {
        method: 'post',
        headers: {
            'content-type': 'application/json'
        },
        body: function () {
            if (options.method == 'post' || options.method == 'POST') {
                kanglog('options.method', 'testing line 15')
                return JSON.stringify(object)
            } else {
                const get = () => {
                    console.log('bad method!!')
                    kanglog('bad method', 'get method testing')
                }
                return get()
            }
        }


    }) {

        //remove when placed in parameters
        kang.log.route = url
        url = window.location.origin + url
        object.log = kang.log

        let elementInfo = {
            elementtype: domelement.tagName,
            classes: domelement.classList,
            parentclasses: domelement.parentNode.classList,
            grandparentclasses: domelement.parentNode.parentNode.classList,
            greatgrandparentclasses: domelement.parentNode.parentNode.parentNode.classList,
            id: domelement.id,
            parentid: domelement.parentNode.id,
            grandparentid: domelement.parentNode.parentNode.id,
            greatgrandparentid: domelement.parentNode.parentNode.parentNode.id,
            innerhtml: domelement.innerHTML,
            innertext: domelement.innerText,
            parenthtml: domelement.parentNode.innerHTML,
            parenttext: domelement.parentNode.innerText,
            childnodes: domelement.childNodes,
            html: domelement.outerText

        }

        object.element = elementInfo
        // !default method = post
        // !default headers = application/json
        // !.then() defaults



        // check req method, if get (no body) else (body)
        options.body = function () {
            if (options.method !== 'post' || !options.method !== 'POST') {
                kanglog(`options.method == ${options.method}`, 'get method testing')
                return null
            } else {
                kanglog(`options.method == ${options.method}`, 'testing line 15, returning json object')
                return JSON.stringify(object)


            }
        }
        options.body = options.body()



        // fetch resources
        kanglog('fetch', kang.log.route)
        fetch(url, options)
            //turn res to json
            .then(res => res.json())
            // log the data to console
            .then(data => {

                kanglog(`response from ${kang.log.route}`, 'trace response')
                // console.log(data)
                // return kang.data(data)
                kang.gangster = kang.data(data)
                return kang.gangster



            }).then(() => console.log(kang.gangster))

    },
    log: {
        user: 'USER NOT IMPLEMENTED',
        gay: 'yep',
        ip: 'IP NOT IMPLEMENTED',
        timestamp: Date.now(),
        timestampReadable: Date(),

    },
    data: function (data) {

        console.log(data)


        return data
    }
}




function desired(url, {
    object
}, {
    domelement,
    result
}, {
    options
}) {}

function test() {
    let options = {
        get: 'get',
        put: 'put',
        headers: 'headers',
        content: {
            text: 'text/plain',
            css: 'text/css',
            html: 'text/html',
            js: 'text/javascript',
            png: 'image/png',
            gif: 'image/gif',
            svg: 'image/svg+xml',
            webp: 'image/webp',
            webm: 'audio/webm'
        }
    }
}

let content = ['text/plain', 'text/css', 'text/html', 'text/javascript', 'image/png', 'image/gif', 'image/svg+xml', 'image/webp']




// export kang as
// default


export {
    kang as
    default
}