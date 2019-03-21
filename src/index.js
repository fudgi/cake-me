import 'bootstrap'
import './index.scss'
import 'jquery'

ymaps.ready(init);    
function init(){ 
    var myMap = new ymaps.Map("map", {
        center: [56.6392,47.8938],
        zoom: 16
    }); 
    
    myMap.geoObjects
        .add(new ymaps.Placemark([56.6392,47.8938]));
}