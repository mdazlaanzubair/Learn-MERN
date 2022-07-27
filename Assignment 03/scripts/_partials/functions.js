console.log("Functions Partial Loaded Successfully")
// ? This file contain custom made functions in order to make things readable

// ? Declaring Data object which grabs all data used in this app
export let data = {
    investment: 0, // denotes the actual amount invested
    buy_cost: 0, // denotes the initial purchase price
    sell_cost: 0, // denotes the price on which crypto will be sell
    one_usd_to_crypto: 0, // denotes 1 USD is equal to how much crypto
    crypto_purchased: 0, // denotes how much crypto purchased with the invested amount
    investment_after_sell: 0, // denotes the value of investment after selling crypto
    return: 0, // denotes return on investment ROI
    profit: 0, // denotes profit on investment in %age
    crypto: '' // crypto selected or invested in
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
        // return the value
        elem = document.querySelector(selector).value
    } else {
        // return the element
        elem = document.querySelector(selector)
    }

    return elem
}

// ? Function - 02
// * This is a toggle function use to toggle UI elements
// * This function contains two arguments. First argument represents the selector and
// * the second one represents the condition
export const elem_toggle = (selector, option) => {

    // getting element
    const element = grab_elem(selector, "element")

    // conditionally toggling class
    if (option === "hide") {
        element.classList.add("d-none")
    } else {
        element.classList.remove("d-none")
    }
}

// ? Function - 03
// * Function to to convert empty walues to 1 and string value to numbered
export const amt_converter = (amount) => {

    let converted_amt = 100

    // * If zero? convert investment into 1
    if (amount === '') {
        converted_amt = 1
    } else {

        // * converting amount into number format and separating comma(s)
        converted_amt = parseFloat(amount.replace(/,/g, ''))
    }

    return converted_amt
}

// ? Function - 04
// * This function is used to grab complete form values and store in Data object
export const get_form_data = () => {

    // * getting values of all inputs from form
    const investment = grab_elem("#investment", "value")
    const buy_cost = grab_elem("#buy_cost", "value")
    const sell_cost = grab_elem("#sell_cost", "value")
    data.crypto = grab_elem("#crypto_list", "value")

    // * converting amounts and saving in Data object
    data.investment = amt_converter(investment)
    data.buy_cost = amt_converter(buy_cost)
    data.sell_cost = amt_converter(sell_cost)
}

// ? Function - 04
// * This function is the calculator of this application
export const calculation = () => {

    // ? How much crypto is of 1 USD
    data.one_usd_to_crypto = 1 / data.buy_cost

    // ? How much crypto purchased
    // * Calculating by multiplying investment by crypto per USD value
    data.crypto_purchased = data.one_usd_to_crypto * data.investment

    // ? How much usd after selling
    // * Calculating investment after selling crypto
    // * Calculating by multiplying total crypto purchased with selling price
    data.investment_after_sell = data.crypto_purchased * data.sell_cost

    // ? How much profit gained
    // * calculating return on investment
    data.return = data.investment_after_sell - data.investment

    // *calculating profit in %age
    data.profit = (data.return * 100) / data.investment

}

// ? Function - xx
// * This function is used to grab complete form values
export const form_submit = () => {

    // * calling form grabber
    get_form_data()

    // * calling calculator
    calculation()

    console.log("You Invested", data.investment, "In", data.crypto)
    console.log("Purchased On", data.buy_cost)
    console.log("Crypto Purchased in 1 USD", data.one_usd_to_crypto)
    console.log("You got", data.crypto_purchased, data.crypto)
    console.log("You Sell", data.crypto, "On", data.sell_cost)
    console.log("Your Investment after Selling", data.investment_after_sell)
    console.log("You profit is", data.return, "i.e.", `${data.profit}%`)
}
