console.log("Events Partial Loaded Successfully")
// * Including functions partial
import * as funcs from "./functions.js";

// ? This file contain custom made event in order to make things readable

// ? Event - 01
// * This event is to submit form
document.getElementById("submit").addEventListener("click", (e) => {
    funcs.form_submit()
})
