
    
const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const coinSelect = document.querySelector(".coin-select")



function convertValues() {

    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // valor em Real
    const currencyValuetoConverted = document.querySelector(".currency-value") //valor em dolar

    console.log(currencySelect);

    const dolartoday = 5.2
    const eurotoday = 6.2
    const libratoday = 7.2
    const bitcointoday = 555.688


    if (currencySelect.value == "Dolar") { 
        // o seletc tiver selecionado valor de dolar, entre aqui 
        currencyValuetoConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolartoday)

    }

    if (currencySelect.value == "Euro") {
         // o seletc tiver selecionado valor de Euro, entre aqui
        currencyValuetoConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / eurotoday)
    }

    if (currencySelect.value == "Libra") { 
        // o seletc tiver selecionado valor de libra, entre aqui 
        currencyValuetoConverted.innerHTML = new Intl.NumberFormat("en-GP", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libratoday)

    }

    if (currencySelect.value == "Bitcoin") { 
        // o seletc tiver selecionado valor de bitcoin, entre aqui 
        currencyValuetoConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcointoday)

    }
    
    
    

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

}

function changeCurrancy() {
    const currancyName = document.getElementById("currancy-name") 
    const currancyImg = document.querySelector(".currancy-img")

    if (currencySelect.value == "Dolar"){

        currancyName.innerHTML = "Dolar Americano"
        currancyImg.src = "/assets/dolar.png"
    }
    if (currencySelect.value == "Euro"){

        currancyName.innerHTML = "Euro"
        currancyImg.src = "/assets/euro.png"
    }
    
    if (currencySelect.value == "Libra"){

        currancyName.innerHTML = "Libra"
        currancyImg.src = "/assets/Libra 1.png"
    }
    
    if (currencySelect.value == "Bitcoin"){

        currancyName.innerHTML = "Bitcoin"
        currancyImg.src = "/assets/bitcoin 1.png"
    }

    convertValues()    
} 


currencySelect.addEventListener("change",changeCurrancy  )
convertButton.addEventListener("click", convertValues)
