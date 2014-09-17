'use strict';
var numbers = [];
var slangs = [
    "",
    "Kelly's Eye",
    "One Little Duck",
    "Cup of Tea",
    "Knock at the door",
    "Man alive",
    "Half-dozen",
    "Lucky seven",
    "Garden gate",
    "Doctor's orders",
    "David's Den",
    "Legs eleven",
    "One-dozen",
    "Unlucky for some",
    "",
    "",
    "Never been kissed",
    "",
    "",
    "Goodbye teens",
    "",
    "Key of the door",
    "Two little ducks",
    "The lord is my shepherd",
    "Knock at the door",
    "",
    "Two and six, half a crown",
    "Duck and a crutch",
    "Two and eight, in a state",
    "",
    "Dirty Gertie",
    "",
    "Buckle my shoe",
    "All the threes",
    "",
    "Jump and jive",
    "Three-dozen",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "Droopy drawers",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "Danny La Rue",
    "Here comes Herbie",
    "House with a bamboo door",
    "All the fives",
    "Shott's bus",
    "Heinz varieties",
    "",
    "The Brighton Line",
    "",
    "",
    "Tickety Boo",
    "Zoo Lane",
    "",
    "",
    "Clickety click",
    "",
    "Anyway up",
    "",
    "Bang on the drum",
    "",
    "",
    "",
    "",
    "Trombones",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "Seven-dozen",
    "Stayin' alive",
    "Between the sticks",
    "Torquay in Devon",
    "Two Fat Ladies",
    "Almost there",
    "Top of the shop"
];
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
        $('#nextNumber').text('Next!');
        if(numbers.length > 0) {
            var lastNum = $('#number').html();
            $('#lastNumber').html(lastNum);
            var nextNumber = getNumber();
            $('#currNumber').html(nextNumber);
            $('#number').html(nextNumber);
            $('#slang').text(slangs[nextNumber]);
            $("div[id='number" + nextNumber + "']").removeClass().addClass('number chosen');
        } else {
            alert('No more numbers!');
        }
    });
    $('#currNumber').click(function() {
        $('#bigNumber').fadeToggle(200);
    });
});
