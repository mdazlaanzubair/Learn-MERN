console.log("Events Partial Loaded Successfully");
// * Including functions partial
import * as cf from "./functions.js";

// ? This file contain custom made event in order to make things readable

// ? Event - 01
// * This event is to submit form
document.getElementById("investment").addEventListener("focusout", (e) => {
  // * converting amounts and saving in Data object
  cf.data.investment = cf.amt_converter(e.target.value);
  console.log(e.target.value);
});

// ? Event - xx
// * This event is to submit form
document.getElementById("submit").addEventListener("click", (e) => {
  cf.form_submit();
});
