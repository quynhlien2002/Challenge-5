var today = moment();
$('#currentDay').text(today.format("MMMM Do, YYYY"));
// time in the heading 

var colorTime = parseInt(document.querySelector('.time').textContent);
var timeNow = parseInt(moment().format('H'));
// set the time in the planner and the current time 

// console.log(colorTime);
// console.log(timeNow);

for (i = 0; i < colorTime.length; i++){
if (timeNow == colorTime){
    $('tr').addClass('present');
} else if (timeNow < colorTime){
    $('tr').addClass('past');
} else if (timeNow > colorTime){
    $('tr').addClass('future');
}
} 

console.log(timeNow);
console.log(colorTime);


