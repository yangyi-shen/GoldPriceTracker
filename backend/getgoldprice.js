const API_URL = 'https://data-asg.goldprice.org/dbXRates/USD'
const HEADERS = {
    "User-Agent": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:120.0) Gecko/20100101 Firefox/120.0"
}

export default async function getGoldPrice() {
    const response = await fetch(API_URL, HEADERS)
        .then(response => response.json())
        .then(response => response.items[0].xauPrice)

    return response
}