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
    var listItemSix = $('.list-item-six').val();
    console.log(listItemSix);
    localStorage.setItem('listItemSix', listItemSix);

    localStorage.getItem('listItemSix');
    if ( listItemSix !== null && listItemSix !== undefined){
    $('.list-item-six').val(listItemSix);


    var listItemSeven = $('.list-item-seven').val();
    console.log(listItemSeven);
    localStorage.setItem('listItemSeven', listItemSeven);
    };

    localStorage.getItem('listItemSeven');
    if ( listItemSeven !== null && listItemSeven !== undefined){
    $('.list-item-seven').val(listItemSeven);
    };

    var listItemEight = $('.list-item-eight').val();
    console.log(listItemEight);
    localStorage.setItem('listItemEight', listItemEight);

    localStorage.getItem('listItemEight');
    if ( listItemEight !== null){
    $('.list-item-eight').val(listItemEight);
    }

    var listItemNine = $('.list-item-nine').val();
    console.log(listItemNine);
    localStorage.setItem('listItemNine', listItemNine);

    localStorage.getItem('listItemNine');
    if ( listItemNine !== null){
    $('.list-item-nine').val(listItemNine);
    }

    var listItemTen = $('.list-item-ten').val();
    console.log(listItemTen);
    localStorage.setItem('listItemTen', listItemTen);

    localStorage.getItem('listItemTen');
    if ( listItemTen !== null){
    $('.list-item-ten').val(listItemTen);
    }

    var listItemEleven = $('.list-item-eleven').val();
    console.log(listItemEleven);
    localStorage.setItem('listItemElevent', listItemEleven);

    localStorage.getItem('listItemElevent');
    if ( listItemEleven !== null){
    $('.list-item-eleven').val(listItemEleven);
    }

    var listItemTwelve = $('.list-item-twelve').val();
    console.log(listItemTwelve);
    localStorage.setItem('listItemTwelve', listItemTwelve);

    localStorage.getItem('listItemTwelve');
    if ( listItemTwelve !== null){
    $('.list-item-twelve').val(listItemTwelve);
    }

    var listItemThirteen = $('.list-item-thirteen').val();
    console.log(listItemThirteen);
    localStorage.setItem('listItemThirteen', listItemThirteen);

    localStorage.getItem('listItemThirteen');
    if ( listItemThirteen !== null){
    $('.list-item-thirteen').val(listItemThirteen);
    }

    var listItemFourteen = $('.list-item-foourteen').val();
    console.log(listItemFourteen);
    localStorage.setItem('listItemFourteen', listItemFourteen);

    localStorage.getItem('listItemFourteen');
    if ( listItemFourteen !== null){
    $('.list-item-fourteen').val(listItemFourteen);
    }

    var listItemFifteen = $('.list-item-fifteen').val();
    console.log(listItemFifteen);
    localStorage.setItem('listItemFifteen', listItemFifteen);

    localStorage.getItem('listItemFifteen');
    if ( listItemFifteen !== null){
    $('.list-item-fifteen').val(listItemFifteen);
    }

    var listItemSixteen = $('.list-item-sixteen').val();
    console.log(listItemSixteen);
    localStorage.setItem('listItemSixteen', listItemSixteen);

    localStorage.getItem('listItemSixteen');
    if ( listItemSixteen !== null){
    $('.list-item-sixteen').val(listItemSixteen);
    }

    var listItemSeventeen = $('.list-item-seventeen').val();
    console.log(listItemSeventeen);
    localStorage.setItem('listItemSeventeen', listItemSeventeen);

    localStorage.getItem('listItemSeventeen');
    if ( listItemSeventeen !== null){
    $('.list-item-seventeen').val(listItemSeventeen);
    }

    var listItemEighteen = $('.list-item-eighteen').val();
    console.log(listItemEighteen);
    localStorage.setItem('listItemEighteen', listItemEighteen);

    localStorage.getItem('listItemEighteen');
    if ( listItemEighteen !== null){
    $('.list-item-eighteen').val(listItemEighteen);
    
} 
});

$('.saveBtn').ready(function(){
    var listItemSix = localStorage.getItem('listItemSix');
    if ( listItemSix !== null && listItemSix !== undefined){
    $('.list-item-six').val(listItemSix);
    }

    var listItemSeven = localStorage.getItem('listItemSeven');
    if ( listItemSeven !== null && listItemSeven !== undefined){
    $('.list-item-seven').val(listItemSeven);
    };

    var listItemEight = localStorage.getItem('listItemEight');
    if ( listItemEight !== null){
    $('.list-item-eight').val(listItemEight);
    }

    var listItemNine = localStorage.getItem('listItemNine');
    if ( listItemNine !== null){
    $('.list-item-nine').val(listItemNine);
    }

    var listItemTen = localStorage.getItem('listItemTen');
    if ( listItemTen !== null){
    $('.list-item-ten').val(listItemTen);
    }

    var listItemEleven = localStorage.getItem('listItemElevent');
    if ( listItemEleven !== null){
    $('.list-item-eleven').val(listItemEleven);
    }

    var listItemTwelve = localStorage.getItem('listItemTwelve');
    if ( listItemTwelve !== null){
    $('.list-item-twelve').val(listItemTwelve);
    }

    var listItemThirteen = localStorage.getItem('listItemThirteen');
    if ( listItemThirteen !== null){
    $('.list-item-thirteen').val(listItemThirteen);
    }

    var listItemFourteen = localStorage.getItem('listItemFourteen');
    if ( listItemFourteen !== null){
    $('.list-item-fourteen').val(listItemFourteen);
    }

    var listItemFifteen = localStorage.getItem('listItemFifteen');
    if ( listItemFifteen !== null){
    $('.list-item-fifteen').val(listItemFifteen);
    }

    var listItemSixteen = localStorage.getItem('listItemSixteen');
    if ( listItemSixteen !== null){
    $('.list-item-sixteen').val(listItemSixteen);
    }

    var listItemSeventeen = localStorage.getItem('listItemSeventeen');
    if ( listItemSeventeen !== null){
    $('.list-item-seventeen').val(listItemSeventeen);
    }

    var listItemEighteen = localStorage.getItem('listItemEighteen');
    if ( listItemEighteen !== null){
    $('.list-item-eighteen').val(listItemEighteen);
    } 
});




















