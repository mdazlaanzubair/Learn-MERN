console.log("Events Partial Loaded Successfully");
// * Including functions partial
import * as cf from "./functions.js";

// ? This file contain custom made event in order to make things readable

// ? Event - 01
// * This event is to values of the input fields in the data object when focusout
document.getElementById("investment").addEventListener("focusout", (e) => {
  // * converting amounts and saving in Data object
  cf.data.investment = cf.amt_converter(e.target.value);
  console.log(e.target.value);
});

// ? Event - 02
// * This event is to values of the input fields in the data object when focusout
document.getElementById("buy_cost").addEventListener("focusout", (e) => {
  // * converting amounts and saving in Data object
  cf.data.buy_cost = cf.amt_converter(e.target.value);
  console.log(e.target.value);
});

// ? Event - 03
// * This event is to values of the input fields in the data object when focusout
document.getElementById("sell_cost").addEventListener("focusout", (e) => {
  // * converting amounts and saving in Data object
  cf.data.sell_cost = cf.amt_converter(e.target.value);
  console.log(e.target.value);
});

// ? Event - xx
// * This event is to submit form
document.getElementById("submit").addEventListener("click", (e) => {
  cf.form_submit();
});
