'use strict';
var numbers = [];
// Use jQuery to programmatically generate a grid of numbers from 1 to 90
for (var i = 1; i <= 90; i++) {
    numbers.push(i);
    $('<div />', {
        'class' : 'number',
        'id'    : 'number' + i,
        'html' : i
    }).appendTo($('#numbers'));
}
// Gets a number by picking a random index, and selecting a number from the numbers array
// Then it splices the array at the index point, removing the selected number
var getNumber = function() {
    var index = Math.floor((Math.random() * numbers.length));
    var theNumber = numbers[index];
    numbers.splice(index, 1);
    return theNumber;
};
// Whenever the user clicks on the button, generate a random number
// Update the display with this number
// Show the last number used in the lastNumber element
// When the current number box is clicked, toggle a larger version above the grid
// When all 90 numbers have gone, show an alert with 'No more numbers!'
$(document).ready(function() {
    $('#nextNumber').click(function() {
        if(numbers.length > 0) {
            var lastNum = $('#currNumber').html();
            $('#lastNumber').html(lastNum);
            var nextNumber = getNumber();
            $('#currNumber').html(nextNumber);
            $('#bigNumber').html(nextNumber);
            $("div[id='number" + nextNumber + "']").removeClass().addClass('number chosen');
        } else {
            alert('No more numbers!');
        }
    });
    $('#currNumber').click(function() {
        $('#bigNumber').fadeToggle(200);
    });
});
