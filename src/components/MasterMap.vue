<template>
  <div class="map-box" id="masterMap">
    <div class="layer-tools">
      <LayerTools
        @addGeoServerLayers="addGeoServerLayers"
        @removeGeoServerLayers="removeGeoServerLayers"
      ></LayerTools>
    </div>
    <div class="tool">
      <!-- <el-button @click="addLayers" type="primary">加载图层</el-button> -->
      <!-- <el-button @click="addMapLayers" type="primary">加载arcgis</el-button> -->
      <!-- <el-button @click="query" type="primary">查询</el-button> -->
      <!-- <el-button @click="removeLayers" type="primary">删除图层</el-button> -->
    </div>
  </div>
</template>

<script>
import geoJson from "@/api/mapJson";
import { getAllAndroidPlugins, getList, getLayersInfo } from "@/api/qinqiu";

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
      geoServerLayersGroup: null,
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

      this.geoServerLayersGroup = L.layerGroup().addTo(this.map);

      L.tileLayer
        .chinaProvider("Geoq.Normal.Map", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        })
        .addTo(this.map);

      this.map.on("click", (e) => {
        let group = this.geoServerLayersGroup.getLayers();
        if (group && group.length > 0) {
          console.log(group);
          console.log(e);
          this.query(e.latlng)
        }
      });

      // let url = "/geoserver/gwc/service/wmts";
      // var matrixIds = [];
      // for (var i = 0; i < 22; ++i) {
      //   matrixIds[i] = {
      //     identifier: "" + i,
      //     topLeftCorner: new L.LatLng(90, -180),
      //   };
      // }
      // var wmtsOptionsMap = {
      //   layer: "territory:farmland", //瓦片地图名称
      //   tilematrixSet: "EPSG:4326", //GeoServer使用的网格名称
      //   tileSize: 256, //切片大小
      //   format: "image/png",
      //   maxZoom: 33,
      //   minZoom: 10,
      //   matrixIds: matrixIds,
      // };
      // var wmtsMap = new L.TileLayer.WMTS(url, wmtsOptionsMap);
      // this.map.addLayer(wmtsMap);
    },
    addGeoServerLayers(layersData) {
      let wms = L.Geoserver.wms(layersData.url, layersData.option);
      this.geoServerLayersGroup.addLayer(wms);
      // this.$mapCommon.addGeoServerWMS(
      //   this.map, //当前地图
      //   layersData.url, //图层地址
      //   layersData.option //图层参数
      // );
    },

    // addMapLayers(layersData) {
    //   let _this = this;
    //   _this.$mapCommon.addMapLayers(this.map, {
    //     url: this.featureLayerURL,
    //     pointToLayer: (geojson, latlng) => {
    //       return L.marker(latlng, {
    //         // icon: _this.icon,
    //       });
    //     },
    //   });
    // },
    removeGeoServerLayers(layersData) {
      for (let item of this.geoServerLayersGroup.getLayers()) {
        if (item.options.layers == layersData.option.layers) {
          console.log(item.options.layers);
          console.log(layersData.option.layers);
          console.log(item);
          this.geoServerLayersGroup.removeLayer(item);
        }
      }
    },
    query(latlng) {
      let url = "http://218.77.58.22:28088/geoserver/territory/wms";
      var param = {
        service: "WFS",
        version: "1.0.0",
        request: "GetFeature",
        typeName: "territory:farmland",
        outputFormat: "application/json",
        maxFeatures: 1,
        CQL_FILTER: `CONTAINS(the_geom,SRID=4326;POINT(${latlng.lng} ${latlng.lat}))`,
        // CQL_FILTER: `CONTAINS(wkb_geometry,SRID=4326;POINT(${latlng.lng} ${latlng.lat}))`,

        // srsName: "EPSG:4326",
        // BBOX: "111.56410217285156,42.23075866699219,111.70280456542969,42.36946105957031",
      };

      getLayersInfo(url, param).then(({ features }) => {
        console.log(features);
        // let feature = features[0]
      });
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
