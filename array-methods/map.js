const prices = [42.42, 10, 28.2234, 3.2, 5, 12];
const priceObjects = prices.map(num => {return {price: num, salePrice: num / 2 }});
console.log('Price objects', priceObjects);

const formattedPrices = prices.map(num => `\$${num.toFixed(2)}`);
console.log('Formatted prices', formattedPrices);
