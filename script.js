function check() {
    let summaBuy =document.getElementById("enter").value; 
    let xBuy = document.getElementById("select").value;
    
    let summaSell = document.getElementById("enter1").value; 
    let xSell = document.getElementById("select1").value;

    let dollarRateBuy = 429;
    let euroRateBuy = 507;
    let dollarRateSell= 431;
    let euroRateSell= 509;
    
    let resultTengeBuy; 
    let resultDollarBuy; 
    let resultEuroBuy;
    let resultTengeSell; 
    let resultDollarSell;
    let resultEuroSell;
    
    if (xBuy === "KZT") {
        resultDollarBuy = parseFloat(summaBuy / dollarRateBuy).toFixed(2);
        resultEuroBuy = parseFloat(summaBuy / euroRateBuy).toFixed(2);
        document.getElementById("USD").value = resultDollarBuy;
        document.getElementById("EUR").value = resultEuroBuy;
        document.getElementById("KZT").value = "-";
    } else if (xBuy === "USD") {
        resultTengeBuy = parseFloat(summaBuy * dollarRateBuy).toFixed(2);
        resultEuroBuy = parseFloat(resultTengeBuy / euroRateBuy).toFixed(2);
        document.getElementById("KZT").value = resultTengeBuy;
        document.getElementById("EUR").value = resultEuroBuy;
        document.getElementById("USD").value = "-";
    } else if (xBuy === "EUR") {
        resultTengeBuy = parseFloat(summaBuy * euroRateBuy).toFixed(2);
        resultDollarBuy = parseFloat(resultTengeBuy/dollarRateBuy).toFixed(2);
        document.getElementById("KZT").value = resultTengeBuy;
        document.getElementById("USD").value = resultDollarBuy;
        document.getElementById("EUR").value = "-";
    }

    if (xSell === "KZT") {
        resultDollarSell = parseFloat(summaSell / dollarRateSell).toFixed(2);
        resultEuroSell = parseFloat(summaSell / euroRateSell).toFixed(2);
        document.getElementById("USD1").value = resultDollarSell;
        document.getElementById("EUR1").value = resultEuroSell;
        document.getElementById("KZT1").value = "-";
    } else if (xSell === "USD") {
        resultTengeSell = parseFloat(summaSell * dollarRateSell).toFixed(2);
        resultEuroSell = parseFloat(resultTengeSell /euroRateSell).toFixed(2);
        document.getElementById("KZT1").value = resultTengeSell;
        document.getElementById("EUR1").value = resultEuroSell;
        document.getElementById("USD1").value = "-";
    } else if (xSell === "EUR") {
        resultTengeSell = parseFloat(summaSell * euroRateSell).toFixed(2);
        resultDollarSell = parseFloat(resultTengeSell/dollarRateSell).toFixed(2);
        document.getElementById("KZT1").value = resultTengeSell;
        document.getElementById("USD1").value = resultDollarSell;
        document.getElementById("EUR1").value = "-";
    }
}
    