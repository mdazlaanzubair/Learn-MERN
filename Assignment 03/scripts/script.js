import * as cf from "./_partials/functions.js";
import * as evnts from "./_partials/events.js";

// ? initializing select2 plugin
// * On change venet has been attached to the select2 in order to get value
// ! I tried writing this event in Events Partial but partial code is
// ! ambigous with jQuery plugins, like Select2
$(document).ready(function () {
  $("#crypto_list")
    .select2()
    .change((e) => {
      // * grabing value of selected crypto
      const selected_currency_val = e.target.value;

      // * grabing value of selected crypto
      const selected_currency_name =
        e.target.options[e.target.selectedIndex].text;
      // * splitting text inorder to get crypto currency name
      // * second index of this array contains crypto name
      const selected_currency_name_arr = selected_currency_name.split(" ");

      // ! setting the selected value of crypto in data object
      cf.data.crypto = selected_currency_name_arr[2];

      // * getting UI element which will get the selected crypto value
      const ui_elem_array = document.getElementsByClassName("crypto_selected");

      // * looping through ui elements to show selected crypto
      for (let i = 0; i < ui_elem_array.length; i++) {
        // * setting value in each UI element
        ui_elem_array[i].innerHTML = cf.data.crypto;
      }

      // ? calling crypto rate fetcher function inorder to set rates as the crypto selection change by user
      cf.get_crypto_rate(selected_currency_val);
    });

  // ! calling crypto list function inorder to populate options for selection as the webpage loads
  cf.crypto_currency_fetcher();

  // ! calling crypto rate fetcher function inorder to set rates as the webpage loads
  cf.get_crypto_rate(1);
});

// ? initializing Cleave JS plugin
// * Amounts input ui elements formating
$(".com_sep_amts")
  .toArray()
  .forEach(function (amt_field) {
    new Cleave(amt_field, {
      numeral: true,
      // numeralThousandsGroupStyle: 'thousand'
    });
  });

// ? initializing Toaster JS plugin
toastr.options = {
  closeButton: true,
  debug: false,
  newestOnTop: true,
  progressBar: true,
  positionClass: "toast-top-right",
  preventDuplicates: true,
  onclick: null,
  showDuration: "300",
  hideDuration: "1000",
  timeOut: "100000",
  extendedTimeOut: "1000",
  showEasing: "swing",
  hideEasing: "linear",
  showMethod: "fadeIn",
  hideMethod: "fadeOut",
};

// ? initializing Tilt JS plugin
$(".tilt_card").tilt({
  glare: true,
  maxGlare: 0.09,
  scale: 0.9,
});
