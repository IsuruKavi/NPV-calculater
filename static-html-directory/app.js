$(document).ready(function () {
    // Listen for "Enter" keypress on the input field
    
    $('#period').on('input',function () {
         // Check if the key pressed is "Enter"
             // Prevent form submission

            // Get the count entered by the user
            var value = parseInt(($(this).val()));
        
// Clear existing input fields
            $('#dynamic-inputs').empty();

            // Clear existing input fields
           

            // Add new input fields based on the count
            for (var i = 0; i < value; i++) {
                var label = $('<label class="block font-semibold text-gray-700 mt-2" for="period' + (i + 1) + '">Cashflow ' + (i + 1) + '</label>');
                var inputField = $('<input type="text" class="cashflow dynamic-input" class= "w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-3 "  name="period' + (i + 1) + '" placeholder="Enter value">');
                $('#dynamic-inputs').append(label).append(inputField).append('<br>');
            }
        
    });
    $('#period').trigger('input');
    $('#npvForm').submit(function (event) {
        event.preventDefault(); // Prevent default form submission

        // Initialize an empty array to store the user-entered values
        var values = [];

        // Get the values entered by the user and push them into the array
        values.push($('#fname').val()); // Initial Investment
        values.push($('#lname').val()); // Discount Rate (r)
        values.push($('#period').val()); // Number of Periods (n)

        // Get the values entered by the user for dynamic inputs (if any)
        $('.dynamic-input').each(function () {
            values.push($(this).val());
        });

        const cashFlowValues=values.slice(3)
        let sumOfCashflows=0;
        cashFlowValues.forEach(function(item, index) {
            let value=(parseInt(item))/(1+parseFloat(values[1]))**(index+1);
            
            sumOfCashflows+=value;
          
        });
        // Output the array of user-entered values to the console
        let intialInvestment=parseInt(values[0]);
        let NPV_value=sumOfCashflows-intialInvestment;
       
    
        $('#npv_value').text('NPV: ' + Math.round(NPV_value));
    });

});


