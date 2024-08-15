import axios from "axios";
import cheerio from "cheerio";

const URL = 'https://goldprice.org/'

export default async function getGoldPrice() {
    // get the price of gold via web scraping
    const response = await axios.get(URL);

    const $ = cheerio.load(response.data);
    const price = $('.gpoticker-price').text();

    console.log('Price:', price);
}

getGoldPrice();