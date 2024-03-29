import L from "leaflet";
import * as esri from 'esri-leaflet'
// L.esri = L
import 'leaflet.pm'
import 'leaflet.pm/dist/leaflet.pm.css'

const addMapLayers = (map, option) => {
    let feature = L.esri.featureLayer(option);
    console.log(feature)
    //将服务加入地图中
    // feature.addTo(map)
    feature.bindPopup

    map.addLayer(feature);

    feature.bindPopup(function (layer) {

        return L.Util.template(
            "<p>占地面积：</strong></strong> <strong>{{市州}}</strong> </p>",
            layer.feature.properties
        );
    });
}
const addGeoServerWMS = (map, url, option) => {
    let wms = L.Geoserver.wms(url, option);
    map.addLayer(wms);
}

export default { addMapLayers, addGeoServerWMS }