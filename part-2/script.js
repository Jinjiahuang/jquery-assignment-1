for (i = 0; i < 196; i++) {
    if (i % 2) {
        $('body').append($('<div class="box type-2"></div>'))
    }
    else {
        $('body').append($('<div class="box type-1"></div>'))
    }
};

$('.box').click(function(){
    if ($(this).hasClass('clicked')){
        $(this).removeClass('clicked')
    }
    else {$(this).addClass('clicked')}
});