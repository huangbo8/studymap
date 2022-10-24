<template>
  <div class="map-box" id="masterMap">
    <div class="layer-tools"><LayerTools></LayerTools></div>
    <div class="tool">
      <el-button @click="addLayers" type="primary">加载图层</el-button>
      <el-button @click="removeLayers" type="primary">删除图层</el-button>
    </div>
  </div>
</template>
    
    <script>
import geoJson from "@/api/mapJson";
import { getAllAndroidPlugins, getList } from "@/api/qinqiu";

import LayerTools from "@/components/LayerTools.vue";

export default {
  name: "MasterMap",
  components: { LayerTools },
  data() {
    return {
      map: null,
      layers: null,
      featureLayerURL:
        "https://img.net/server001/rest/services/Hosted/a_20210512164917526_gcj02/FeatureServer/0",
      icon: {
        iconUrl: "https://esri.github.io/esri-leaflet/img/earthquake-icon.png",
        iconSize: [50, 50],
        iconAnchor: [13.5, 17.5],
        popupAnchor: [0, -11],
      },
      wmsGrounp: null,
    };
  },
  mounted() {
    this.createMap();
  },
  methods: {
    createMap() {
      this.map = L.map("masterMap", {
        center: [28.12, 112.59],
        zoom: 5,
      });

      let url = "/geoserver/gwc/service/wmts";
      L.tileLayer
        .chinaProvider("Geoq.Normal.Map", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        })
        .addTo(this.map);

      var matrixIds = [];
      for (var i = 0; i < 22; ++i) {
        matrixIds[i] = {
          identifier: "" + i,
          topLeftCorner: new L.LatLng(90, -180),
        };
      }

      var wmtsOptionsMap = {
        layer: "territory:farmland", //瓦片地图名称
        tilematrixSet: "EPSG:4326", //GeoServer使用的网格名称
        tileSize: 256, //切片大小
        format: "image/png",
        maxZoom: 33,
        minZoom: 10,
        matrixIds: matrixIds,
      };
      var wmtsMap = new L.TileLayer.WMTS(url, wmtsOptionsMap);
      this.map.addLayer(wmtsMap);
    },
    addLayers() {
      // let arr = [
      //   {
      //     url: "http://192.168.0.112:8080/geoserver/mydata/wms",
      //     layer: "mydata:CHN_adm3_xian",
      //   },
      //   {
      //     url: "http://218.77.58.22:28088/geoserver/territory/wms",
      //     layer: "territory:farmland",
      //   },
      // ];

      // for (let i of arr) {
      //   this.$mapCommon.addGeoServerWMS(this.map, i.url, { layers: i.layer });
      // }

      let one = L.Geoserver.wms(
        "http://192.168.0.112:8080/geoserver/mydata/wms",

        { layers: "mydata:CHN_adm3_xian", attribution: "mydata:CHN_adm3_xian" }
      );
      let two = L.Geoserver.wms(
        "http://218.77.58.22:28088/geoserver/territory/wms",
        { layers: "territory:farmland", attribution: "territory:farmlan" }
      );
      this.wmsGrounp = L.layerGroup([one, two]).addTo(this.map);
    },
    removeLayers() {
      for (let item of this.wmsGrounp.getLayers()) {
        if (item.options.attribution == "mydata:CHN_adm3_xian")
          this.wmsGrounp.removeLayer(item);
      }
    },
  },
};
</script>
      
    <style lang="scss" scoped>
.map-box {
  height: 100%;
  z-index: 0;
  // background: green;
  .layer-tools {
    position: absolute;
    z-index: 999;
    right: 20px;
    top: 20px;
  }
  .tool {
    position: absolute;
    right: 10px;
    top: 10px;
    background: #fff;
    z-index: 999;
  }
}
</style>
    