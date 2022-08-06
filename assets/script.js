var today = moment();
$('#currentDay').text(today.format("MMMM Do, YYYY"));
// time in the heading 

var timeNow = parseInt(moment().format('hh:mm a'));

$('.color').each(function(){
    var colorTime = parseInt($(this).children(".time").text());
    if (timeNow === colorTime){
        $(this).addClass('present');
        $(this).removeClass('past');
        $(this).removeClass('future');
    } else if (timeNow < colorTime){
        $(this).addClass('past');
        $(this).removeClass('present');
        $(this).removeClass('future');
    } else {
        $(this).addClass('future');
        $(this).removeClass('past');
        $(this).removeClass('present');
    }
});

$('.saveBtn').on('click', function(){
    var listItem = $(this).sibling('td').children('.list-item').value();
    console.log(listItem);
});







