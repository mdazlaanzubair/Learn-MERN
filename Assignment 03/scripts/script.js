import * as cf from "./_partials/functions.js";
import * as evnts from "./_partials/events.js";

// ? initializing select2 plugin
// * On change venet has been attached to the select2 in order to get value
// ! I tried writing this event in Events Partial but partial code is 
// ! ambigous with jQuery plugins, like Select2
$(document).ready(function () {
    $('#crypto_list').select2().change((e) => {

        // sending selected option value to the function
        const curr_elem_val = e.target.value

        // getting UI element which will get the selected crypto value
        const ui_elem_array = document.getElementsByClassName("crypto_selected")

        // looping through ui elements to show selected crypto
        for (let i = 0; i < ui_elem_array.length; i++) {

            // setting value in each UI element
            ui_elem_array[i].innerHTML = curr_elem_val
        }

    });
});

// ? initializing Cleave JS plugin
// * Amounts input ui elements formating
$('.com_sep_amts').toArray().forEach(function (amt_field) {
    new Cleave(amt_field, {
        numeral: true,
        // numeralThousandsGroupStyle: 'thousand'
    });
});

// ? initializing Toaster JS plugin
toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": true,
    "progressBar": true,
    "positionClass": "toast-top-right",
    "preventDuplicates": true,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "100000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
}
