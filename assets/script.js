var today = moment();
$('#currentDay').text(today.format("MMMM Do, YYYY"));

var timeNow = $('.time');
var colorTime = parseInt(moment().format('MMMM Do YYYY, h:mm:ss a'));

if (timeNow === colorTime){
    timeNow.css('background-color', 'red');
}

if (timeNow < colorTime){
    timeNow.css('background-color', 'grey');
}

if (timeNow > colorTime){
    timeNow.css ('background-color', 'green');
}


