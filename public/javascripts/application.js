$(document).ready(function() {

    $('#map').height($(window).height())

    // Open external links in a new window
    hostname = window.location.hostname
    $("a[href^=http]")
        .not("a[href*='" + hostname + "']")
        .addClass('link external')
        .attr('target', '_blank');

    ymaps.ready(init);

    function init(){
        var myMap = new ymaps.Map ("map", {
                    center: [55.76, 37.64],
                    zoom: 12,
                });

        myMap.controls.add(
            new ymaps.control.ZoomControl()
        );

        myMap.controls.add('scaleLine');

        var myPlacemark1 = new ymaps.Placemark([55.8, 37.6]);
        var myPlacemark2 = new ymaps.Placemark([55.79, 37.6]);
        var myPlacemark3 = new ymaps.Placemark([55.78, 37.6]);
        var myPlacemark4 = new ymaps.Placemark([55.77, 37.6]);

        myMap.geoObjects.add(myPlacemark1);
        myMap.geoObjects.add(myPlacemark2);
        myMap.geoObjects.add(myPlacemark3);
        myMap.geoObjects.add(myPlacemark4);
    }


});
