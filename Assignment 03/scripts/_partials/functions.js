// ? This file contain custom made functions in order to make things readable

// ? Declaring Data object which grabs all data used in this app
export let data = {
  base_url: "https://pro-api.coinmarketcap.com/v1/cryptocurrency", // denotes the base url from which data is to fetched
  investment: 1, // denotes the actual amount invested
  current_rate: 1, // denotes the current price of selected crypto
  buy_cost: 1, // denotes the initial purchase price
  sell_cost: 1, // denotes the price on which crypto will be sell
  one_usd_to_crypto: 1, // denotes 1 USD is equal to how much crypto
  crypto_purchased: 1, // denotes how much crypto purchased with the invested amount
  investment_after_sell: 1, // denotes the value of investment after selling crypto
  earned: 0, // denotes return on investment ROI
  profit: 0, // denotes profit on investment in %age
  crypto: "Bitcoin", // crypto selected or invested in
};

// ? Function - 01
// * This function is used to grab a single form elements or
// * their values depending on the options opted
// * This function contains two arguments. First argument represents the selector and
// * the second one represents the condition
export const grab_elem = (selector, option) => {
  // * creating empty variable
  let elem;

  // * conditionally setting value of elem
  if (option === "value") {
    // return the value
    elem = document.querySelector(selector).value;
  } else {
    // return the element
    elem = document.querySelector(selector);
  }

  return elem;
};

// ? Function - 02
// * This is a toggle function use to toggle UI elements
// * This function contains two arguments. First argument represents the selector and
// * the second one represents the condition
export const elem_toggle = (selector, option) => {
  // getting element
  const element = grab_elem(selector, "element");

  // conditionally toggling class
  if (option === "hide") {
    element.classList.add("d-none");
  } else {
    element.classList.remove("d-none");
  }
};

// ? Function - 03
// * Function is to convert empty walues to 1 and string value to numbered
export const amt_converter = (amount) => {
  let converted_amt = 100;

  // * If zero? convert investment into 1
  if (amount === "") {
    converted_amt = 1;
  } else {
    // * converting amount into number format and separating comma(s)
    converted_amt = parseFloat(amount.replace(/,/g, ""));
  }

  return converted_amt;
};

// ? Function - 04
// * This function is to calculator of this application
export const calculation = () => {
  // ? How much crypto is of 1 USD
  data.one_usd_to_crypto = 1 / data.buy_cost;

  // ? How much crypto purchased
  // * Calculating by multiplying investment by crypto per USD value
  data.crypto_purchased = data.one_usd_to_crypto * data.investment;

  // ? How much usd after selling
  // * Calculating investment after selling crypto
  // * Calculating by multiplying total crypto purchased with selling price
  data.investment_after_sell = data.crypto_purchased * data.sell_cost;

  // ? How much profit gained
  // * calculating return on investment
  data.earned = data.investment_after_sell - data.investment;

  // *calculating profit in %age
  data.profit = (data.earned * 100) / data.investment;
};

// ? Function - 05
// * This function is to fetch list of crypto currencies and set them as UI sletec options
export const crypto_currency_fetcher = () => {
  // * grabing select UI element
  const crypto_list_select = grab_elem("#crypto_list", "element");

  // * fetching from currency json file
  fetch("../../../data/cmc_crypto_currencies.json")
    // * converting response into json format
    .then((res) => res.json())
    // * dynamically populating option of crypto_select
    .then((result) => {
      // * loopting through crypto currencies data to create options
      for (const crypto in result.data) {
        if (Object.hasOwnProperty.call(result.data, crypto)) {
          const crypto_currency = result.data[crypto];

          // * creating option element for select
          var option = document.createElement("option");

          // * setting value and display text
          option.value = crypto_currency.id;
          option.innerHTML =
            crypto_currency.symbol + " - " + crypto_currency.name;

          // * selecting BTC by default
          if (
            crypto_currency.id === 1 &&
            crypto_currency.symbol === "BTC" &&
            crypto_currency.name === "Bitcoin" &&
            crypto_currency.slug === "bitcoin"
          ) {
            option.selected = true;
          }

          // * pushing option in the crypto_select
          crypto_list_select.appendChild(option);
        }
      }
    });
};

// ? Function - 06
// * This function is to fetch current rates and details of the crypto currency
// * This function accepts argument that contain id of crypto currency to be fetched
export const get_crypto_rate = (crypto_id) => {
  // * creating url to be fetch
  // const url = `${data.base_url}/quotes/latest?id=${crypto_id}&${data.api_key}`;
  const url = `${data.base_url}/quotes/latest?id=${crypto_id}`;
  const url_options = {
    method: "GET",
    headers: {
      "X-CMC_PRO_API_KEY": "2d1e1f18-605e-4361-8f47-cd0abb81d1a4",
    },
  };

  // * fetching input UI element whose values shall be set as the crypto selected
  // * contains the intial/purchase price of crypto
  const input_buy_cost = grab_elem("#buy_cost", "element");

  // * contains the final/selling price of crypto
  const input_sell_cost = grab_elem("#sell_cost", "element");

  // * fetching the recent crypto rates
  fetch(url, url_options)
    .then((res) => res.json())
    .then((results) => {
      // * setting current crypto price in variable
      let crypto_current_rate = results.data[crypto_id].quote.USD.price;

      // ? conditionally rounding off figure for crypto buy_cost and current_rate in data Object
      // * if crypto value is greater than 1 ? convert
      // * else not
      if (crypto_current_rate > 0) {
        data.buy_cost = parseFloat(crypto_current_rate.toFixed(2));
        data.current_rate = parseFloat(crypto_current_rate.toFixed(2));
      } else {
        data.buy_cost = crypto_current_rate;
        data.current_rate = crypto_current_rate;
      }

      // ? calculating selling price of crypto as default
      // * selling price shall be 10% higher than the purchased price
      // * calculating 10% of purchased price
      let ten_per_cent = data.buy_cost * 0.1;

      // ? adding 10% in buy_cost inorder to set default sell_cost in data Object
      // ! there is no need to round off sell_cost because it is derived from already rounded off value
      let sell_cost = ten_per_cent + data.buy_cost;
      data.sell_cost = parseFloat(sell_cost.toFixed(2));

      // ? setting values in UI input element
      // * setting buy_cost and sell_cost values as default values
      input_buy_cost.value = data.buy_cost;
      input_sell_cost.value = data.sell_cost;
    });
};

// ? Function - 07
// * This function is to set results after calculation and display in the DOM
export const result_show = () => {
  // * getting the card from DOM where result will be shown
  const result_card_elem = grab_elem("#result_card_elem", "element");

  // converting all number values in commas thousand separated
  const invested_amt = data.investment.toLocaleString("en-US");
  const purchased_coins = data.crypto_purchased.toLocaleString("en-US");
  const buy_rate = data.buy_cost.toLocaleString("en-US");
  const current_rate = data.current_rate.toLocaleString("en-US");
  const sell_rate = data.sell_cost.toLocaleString("en-US");
  const amt_after_sell = data.investment_after_sell.toLocaleString("en-US");
  const earned = data.earned.toLocaleString("en-US");
  const profit = data.profit.toFixed(2);

  // setting elements to be displayed in DOM
  const result_data = `<li
                                class="list-group-item d-flex justify-content-between align-items-start bg-dark text-primary fw-bold">
                                <div class="ms-2 me-auto">
                                    <div class="fw-bold text-primary">Investment</div>
                                    <small class="text-white">
                                        You have invested <strong class="result_highlights">USD ${invested_amt}</strong> in <strong
                                            class="result_highlights">${
                                              data.crypto
                                            }</strong>.
                                    </small>
                                </div>
                                <span class="badge bg-primary rounded-pill text-dark float-end">${profit}% profit
                                    earned</span>
                            </li>
                            <li
                                class="list-group-item d-flex justify-content-between align-items-start bg-dark text-primary fw-bold">
                                <div class="ms-2 me-auto">
                                    <div class="fw-bold text-primary">Crypto Purchased</div>
                                    <small class="text-white">- You have bought <strong class="result_highlights">${purchased_coins}
                                            ${data.crypto}</strong> on
                                        the rate of <strong class="result_highlights">USD ${buy_rate}</strong>. <br> - However, the
                                        current
                                        rate
                                        of <strong class="result_highlights">${
                                          data.crypto
                                        }</strong> is <strong class="result_highlights">USD
                                            ${current_rate}</strong>.</small>
                                </div>
                            </li>
                            <li
                                class="list-group-item d-flex justify-content-between align-items-start bg-dark text-primary fw-bold">
                                <div class="ms-2 me-auto">
                                    <div class="fw-bold text-primary">Return on Investment</div>
                                    <small class="text-white">- You sell <strong class="result_highlights">${
                                      data.crypto
                                    }</strong> on
                                        the rate of <strong class="result_highlights">USD ${sell_rate}</strong>, and got
                                        <strong class="result_highlights">USD ${amt_after_sell}</strong> after selling. <br> - You have ${
    data.earned < 0 ? "lossed" : "earned"
  } <strong class="result_highlights">USD ${earned}</strong> which is <strong
                                            class="result_highlights">${profit}%</strong> of your investment.
                                </div>
                            </li>`;

  // pushing results data in the result_card_elem
  // making the card empty before pushing in the result_data
  result_card_elem.innerHTML = "";
  result_card_elem.insertAdjacentHTML("beforeend", result_data);

  // displaying results in the DOM
  elem_toggle("#results_card", "show");

  // creating alert message based upon proft or loss
  if (data.earned > 0) {
    toastr["success"](
      `Booyeah! You have earned <b>${profit}%</b> profit on <b>USD${invested_amt}</b>`
    );
  } else if (data.earned === 0) {
    toastr["info"](`You have'nt earned or loss on <b>USD${invested_amt}</b>`);
  } else {
    toastr["warning"](
      `Whoops! You have lossed <b>${profit}%</b> on <b>USD${invested_amt}</b>`
    );
  }
};

// ? Function - xx
// * This function is used to grab complete form values
export const form_submit = () => {
  // ? everytime form submits following functions will be executed
  // * calculating user input
  calculation();

  // * showing calculated results
  result_show();
};
