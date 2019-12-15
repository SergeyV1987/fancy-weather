let myMap;

function showMap(lat, lng) {
    ymaps.ready(init);
    function init(){
        myMap = new ymaps.Map("map", {
            center: [lat, lng],
            zoom: 7
        });
    }
}

function rewriteMap(lat, lng) {
    myMap.destroy();
    ymaps.ready(init);
    function init(){
        myMap = new ymaps.Map("map", {
            center: [lat, lng],
            zoom: 7
        });
    }
}

export { showMap, rewriteMap};