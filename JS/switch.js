/**
 * Created by NicholasTurner on 10/6/16.
 */

    // Control Structures
    // if
var totalInDollars = 100;
var currency = "EUR";
var total;

/* if (currency == "MXN") {
 total = totalInDollars * 19.26;
 } else if (currency == "CNY") {
 total = totalInDollars * 1.5;
 } else if (currency == "EUR") {
 total = totalInDollars * 1.11;
 }
 console.log(total);*/
//MXN 19.26
//CNY 1.5
//EUR 1.11

// Switch
//switch (/*variable*/) {}

switch (currency) {
    case "MXN": // : = {
        total = totalInDollars * 19.26;
        break;  // break; = }
    case "CNY":
        total = totalInDollars * 1.5;
        break;
    case "EUR":
        total = totalInDollars * 1.11;
        break;
    case "USD":
    default:
        total = totalInDollars;
        break;
}
console.log(total);
