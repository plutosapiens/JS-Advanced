function createFormatter(separator, symbol, symbolFirst, currencyFormatter){
    let formatterFunc = function(value){
        return currencyFormatter(separator, symbol, symbolFirst, value)
    }
    return formatterFunc
}

//this is what I recieve
function currencyFormatter(separator, symbol, symbolFirst, value) {

    let result = Math.trunc(value) + separator;
    
    result += value.toFixed(2).substr(-2,2);
    
    if (symbolFirst) return symbol + ' ' + result;
    
    else return result + ' ' + symbol;
    
    }
    
let dollarFormatter = createFormatter(',', '$', true, currencyFormatter);

console.log(dollarFormatter(5345));