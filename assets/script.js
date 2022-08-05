var today = moment();
$('#currentDay').text(today.format("MMMM Do, YYYY"));

var colorTime = parseInt(document.querySelector('.time').textContent);
var timeNow = parseInt(moment().format('LT'));
// parseInt

console.log(colorTime);
console.log(timeNow);

if (timeNow === colorTime){
    $('tr').addClass('present');
} else if (timeNow < colorTime){
    $('tr').addClass('past');
} else if (timeNow > colorTime){
    $('tr').addClass('future');
}


