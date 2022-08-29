import L from "leaflet";
import * as esri from 'esri-leaflet'
L.esri = L
import 'leaflet.pm'
import 'leaflet.pm/dist/leaflet.pm.css'
// //定义地图实例
// const newMap = (domId, option) => {
//         let map = L.map(domId, option)
//         return map
//     }
//     //切片图层
// const createLayers = (map, url, option) => {

//     let newLeayer = L.tileLayer(url, option)
//     newLeayer.addTo(map)
//     return newLeayer
// }

// //leaflet.ChineseTmsProviders插件加载地图
// const chinaLayers = (map, url, option) => {

//     let chinaLeayer = L.tileLayer.chinaProvider(url, option)
//     chinaLeayer.addTo(map)
//     return chinaLeayer
// }

const addMapLayers = (map, option) => {
    let feature = L.esri.featureLayer(option);
    //将服务加入地图中

    feature.addTo(map)
        // map.addLayer(feature);
        // feature.bindPopup(function(layer) {
        //     return L.Util.template(
        //         "<p>占地面积：</strong></strong> <strong>{{市州}}</strong> </p>",
        //         layer.feature.properties
        //     );
        // });
    return feature

}

export default { addMapLayers }