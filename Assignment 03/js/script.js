// fetching currency data from json file ../data/currencies.json
// pushed json file to github repo in order to make https fetch request
// dynamically populating currencies options

// initiatng currencies list
// fetching select element from body
var optionList = document.getElementById("currency_list");

// hosted json file
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

// function for currency conversion
function currencyConversion() {
  var conversion_ops = document.getElementsByName("conversion_ops");
  for (let i = 0; i < conversion_ops.length; i++) {
    const option = conversion_ops[i];
    if (option.checked) {
      if (option.value === "auto") {
        console.log("Call currency conversion API");
      } else {
        console.log("Manually Convert");
      }
    }
  }
}
