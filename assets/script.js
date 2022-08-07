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
    var listItemSix = $(this).siblings('td').children('.list-item-six').val();
    console.log(listItemSix);
    localStorage.setItem('listItemSix', listItemSix);
    localStorage.getItem('listItemSix');
    if ( listItemSix !== null && listItemSix !== undefined){
    $('.list-item-six').val(listItemSix);
    };

    var listItemSeven = $(this).siblings('td').children('.list-item-seven').val();
    console.log(listItemSeven);
    localStorage.setItem('listItemSeven', listItemSeven);
    localStorage.getItem('listItemSeven');
    if ( listItemSeven !== null && listItemSeven !== undefined){
    $('.list-item-seven').val(listItemSeven);
    };

    var listItemEight = $(this).siblings('td').children('.list-item-eight').val();
    console.log(listItemEight);
    localStorage.setItem('listItemEight', listItemEight);
    localStorage.getItem('listItemEight');
    if ( listItemEight !== null){
    $('.list-item-eight').val(listItemEight);
} 
});





















