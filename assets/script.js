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
    var listItem = $(this).parent('tr').find('.list-item').val();
    console.log(listItem);
    $('.list-item').textContent = listItem;
    localStorage.setItem('listItem', listItem)
});

if (localStorage(listItem) !== null){
    var storeData = $('<p>');
    $('.list-item').append(storeData);
    storeData.append(listItem).value;
    
}











