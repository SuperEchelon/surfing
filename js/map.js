let myMap;

const init = () => {
    myMap = new ymaps.Map("map", {
        center: [55.743403, 37.638793],
        zoom: 11,
        controls: []
    });

    const coords = [
        [55.743403, 37.638793],
        [55.743175, 37.648103],
        [55.754305, 37.620376],
        [55.752935, 37.625841]
    ];

    const myCollection = new ymaps.GeoObjectCollection({}, {
        draggable: false,
        iconLayout: 'default#image',
        iconImageHref: "./img/Groupmaps.svg",
        iconImageSize: [58, 73],
        iconImageOffset: [-35, -52]
    });

    coords.forEach(coord => {
        myCollection.add(new ymaps.Placemark(coord));
    });

    myMap.geoObjects.add(myCollection);

    myMap.behaviors.disable('scrollZoom');
}

ymaps.ready(init);