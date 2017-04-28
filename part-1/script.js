var view = $('<div class="view"></div>');
$('body').append(view);
view.append('<div class="grass"></div>');
view.append('<div class="sun"></div>');
view.append('<div class="mountain"></div>');
$('.mountain').append('<div class="mountain-top"></div>');

var i = 1;
while (i < 6) {
    $(".sun").append('<div class="ray-' + i + '"></div>');
    i++;
}

var i = 1;
do {
    $(".mountain-top").append('<div class="mountain-cap-' + i + '"></div>');
    i++;
}
while (i < 4);

