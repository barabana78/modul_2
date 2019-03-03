//SLIDER
;(function ($) {
    'use strict';
    $(function () {
        $('.slider').slick({
            infinite: true,//бесконечная прокрутка
            slide: 'div',//слайдами являются только div
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            dots: true,
            centerMode: true,
            prevArrow: '.row-prev',
            nextArrow: '.row-next',
            centerPadding: false,//расстояние на которое выходит след слайд
        });
    })
})(jQuery);

// КАРТА
'use strict';
function initMap() {
    var kharkov = {lat: 49.988906, lng: 36.232727};
    var map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 17,
            center: kharkov
        });
    var marker = new google.maps.Marker({
        position: kharkov,
        map: map,
        icon: 'images/Ok-icon.png',
        title: 'BEETROOT'
    });
    var cont = '<div class="title">' + 'Курсы юных Front-Endщиков';
    var infowindow = new google.maps.InfoWindow({
        content: cont//содержимое маркера
    });
    marker.addListener('click', function () {
        infowindow.open(map, marker)
    });
    infowindow.open(map, marker);

}
// ПЛАВНЫЙ СКРОЛЛ
$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
//отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
//забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
//узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
//анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

$(document).ready(function(){
    $("#menu2").on("click","a", function (event) {
//отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
//забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
//узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
//анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
});