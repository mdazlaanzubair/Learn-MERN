console.log("Functions Partial Loaded Successfully")
// ? This file contain custom made functions in order to make things readable

// ? Declaring data object which grabs all data used in this app
let data = {
    BASE_URL: 'https://v6.exchangerate-api.com/v6/',
    API_KEY: '3febce099de2299bb48d808c',
    investment: "",
    currency: "USD",
    investment_in_usd: 0,
    exchange_rate: 0,
    exchange_date: "",
    today_date: ""
}

// ? Function - 01
// * This function is used to grab a single form elements or 
// * their values depending on the options opted
// * This function contains two arguments. First argument represents the selector and
// * the second one represents the condition
export const grab_elem = (selector, option) => {

    // * creating empty variable
    let elem;

    // * conditionally setting value of elem
    if (option === 'value') {
        elem = document.querySelector(selector).value
    } else {
        elem = document.querySelector(selector)
    }

    return elem
}

// ? Function - 02
// * This function is used to grab complete form values
export const form_submit = () => {

    // * getting form values and setting them in data Object

    data.investment = grab_elem("#investment", "value")
    data.currency = grab_elem("#currency", "value")
    // data.exchange_date = grab_elem("#exchange_date", "value")

    console.log(data.currency)
    console.log(data.investment)
}

document.getElementById("submit").addEventListener("click", (e) => {

    form_submit()
})