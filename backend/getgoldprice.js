const API_URL = 'https://data-asg.goldprice.org/dbXRates/USD'

export default async function getGoldPrice() {
    const response = await fetch(API_URL)
        .then(response => response.json())
        .then(response => response.items[0].xauPrice)

    return response
}