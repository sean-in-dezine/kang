let apiKey = 'ccb3ae3aadd2ef1c8d1ba4cc9ff085c909030dbc403e54e24c7d3623'

function json(url) {
    return fetch(url).then(res => res.json());
}

json(`https://api.ipdata.co?api-key=${apiKey}`).then(data => {
    console.log(data.ip);
    console.log(data.city);
    console.log(data.country_code);
    // so many more properties
});