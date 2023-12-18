function calculatePrices() {
    var products = [];
    var prices = [];

    for (var i = 1; i <= 5; i++) {
        var product = document.getElementById('product' + i).value;
        var price = parseFloat(document.getElementById('price' + i).value);

        if (product && !isNaN(price)) {
            products.push(product);
            prices.push(price);
        }
    }

    // Legolcsóbb termék nevét kiválasztjuk
    var cheapestIndex = prices.indexOf(Math.min(...prices));
    var cheapestProduct = products[cheapestIndex];

    // Átlagár számolás
    var meanPrice = 0;
    for (var j = 0; j < prices.length; j++) {
        meanPrice += prices[j];
    }
    meanPrice /= prices.length;

    // Árak szórása
    var sumPrices = 0;
    for (var k = 0; k < prices.length; k++) {
        sumPrices += Math.pow((prices[k] - meanPrice), 2);
    }
    var stdDev = Math.sqrt(sumPrices / prices.length);

    document.getElementById('cheapest').textContent = "The cheapest product is: " + cheapestProduct + ".";
    document.getElementById('meanPrice').textContent = "Mean of Prices: " + meanPrice.toFixed(2);
    document.getElementById('stdDev').textContent = "Standard Deviation of Prices: " + stdDev.toFixed(2);
}