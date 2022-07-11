import * as funcs from "./_partials/functions.js";
import * as evnts from "./_partials/events.js";

// ? initializing  select2 plugin
// * On change venet has been attached to the select2 in order to get value
// ! I tried writing this event in Events Partial but partial code is 
// ! ambigous with jQuery plugins, like Select2
$(document).ready(function () {
    $('#currency').select2().change((e) => {

        // sending selected option value to the function
        const curr_elem_val = e.target.value
        cf.currency_selection_func(curr_elem_val)
    });
});
