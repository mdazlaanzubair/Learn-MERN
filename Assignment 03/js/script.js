// fetching currency data from json file ../data/currencies.json
// pushed json file to github repo in order to make https fetch request
// dynamically populating currencies options

// initiatng currencies list
// fetching select element from body
var optionList = document.getElementById("currency_list");

// fetching currencies
function fetchCurrencyData() {
  // json file
  const currency_data_url =
    "https://raw.githubusercontent.com/azlaan4/Learn-MERN/master/Assignment%2003/data/currencies.json";

  // fetching currencies from the json file
  fetch(currency_data_url)
    .then((res) => res.json())
    .then((data) => {
      // looping through currencies data
      for (let currency in data) {
        // storing currency data in variables
        let currency_val = currency;
        let currency_name = data[currency].displayName;
        let currency_symbol;

        // conditional statement for checking alt-symbol
        if ("symbol_alt_narrow" in data[currency]) {
          currency_symbol = data[currency].symbol_alt_narrow;
        } else {
          currency_symbol = data[currency].symbol;
        }

        // creating html option element
        var optionTag = document.createElement("option");

        // setting innerHTML in JS option element
        optionTag.innerHTML = `<span class='me-5'>${currency_symbol}</span> - <span class='ms-5'>${currency_name}</span>`;

        // setting values in JS option element
        optionTag.value = currency_val;

        // appending options in select element of body
        optionList.appendChild(optionTag);
      }
    });
}

// function for currency conversion
// function currencyConversion() {
//   var conversion_ops = document.getElementsByName("conversion_ops");
//   for (let i = 0; i < conversion_ops.length; i++) {
//     const option = conversion_ops[i];
//     if (option.checked) {
//       if (option.value === "auto") {
//         console.log("Call currency conversion API");
//       } else {
//         console.log("Manually Convert");
//       }
//     }
//   }
// }

// checking if the investment is in USD or other curency
function usd_or_other() {
  var usd_or_not_indicators = document.getElementsByName("usd_or_not");

  for (let i = 0; i < usd_or_not_indicators.length; i++) {
    const indicator = usd_or_not_indicators[i];
    if (indicator.checked && indicator.value === "usd") {
      // hiding currency selection options
      optionList.classList.add("d-none");
      optionList.classList.remove("select-currency");
      break;
    } else {
      // initializing currency select list
      fetchCurrencyData();

      // showing currency selection options
      optionList.classList.add("select-currency");
      optionList.classList.remove("d-none");
      break;
    }
  }
}
