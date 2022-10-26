<template>
  <div class="map-box" id="masterMap">
    <div class="layer-tools">
      <LayerTools
        @addGeoServerLayers="addGeoServerLayers"
        @removeGeoServerLayers="removeGeoServerLayers"
      ></LayerTools>
    </div>
    <div class="tool"></div>
  </div>
</template>

<script>
import geoJson from "@/api/mapJson";
import { getLayersInfo } from "@/api/qinqiu";
import LayerTools from "@/components/LayerTools.vue";
import disasterBus from "@/components/bus/disasterBus";
export default {
  name: "MasterMap",
  components: { LayerTools },
  data() {
    return {
      // featureLayerURL:
      //   "https://img.net/server001/rest/services/Hosted/a_20210512164917526_gcj02/FeatureServer/0",
      // icon: {
      //   iconUrl: "https://esri.github.io/esri-leaflet/img/earthquake-icon.png",
      //   iconSize: [50, 50],
      //   iconAnchor: [13.5, 17.5],
      //   popupAnchor: [0, -11],
      // },
      map: null,
      layers: null,
      geoServerLayersGroup: null,
      geoServerPopup: null,
      imageThumbnailGroup: null,
      wfsParam: {
        service: "WFS",
        version: "1.0.0",
        request: "GetFeature",
        // typeName: "territory:farmland",
        outputFormat: "application/json",
        maxFeatures: 1,
        // CQL_FILTER: `CONTAINS(the_geom,SRID=4326;POINT(${latlng.lng} ${latlng.lat}))`,
        // CQL_FILTER: `CONTAINS(wkb_geometry,SRID=4326;POINT(${latlng.lng} ${latlng.lat}))`,
        // srsName: "EPSG:4326",
        // BBOX: "111.56410217285156,42.23075866699219,111.70280456542969,42.36946105957031",
      },
    };
  },
  mounted() {
    this.createMap();

    //列表相关组件对地图操作的事件注册
    disasterBus.$on("imageShow", (data) => {
      this.imageShow(data);
    });
    disasterBus.$on("mapLocation", (data) => {
      this.mapLocation(data);
    });
  },
  methods: {
    createMap() {
      this.map = L.map("masterMap", {
        center: [28.932444755, 112.547377999],
        zoom: 5,
      });

      this.geoServerLayersGroup = L.layerGroup().addTo(this.map);
      this.imageThumbnailGroup = L.layerGroup().addTo(this.map);

      // imageThumbnailGroup

      L.tileLayer
        .chinaProvider("Geoq.Normal.Map", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        })
        .addTo(this.map);

      // var latlngs = [
      //   //线中点的经纬度点
      //   [38, 0],
      //   [38, 180],
      //   [0, 0],
      // ];
      // let polyline = L.polyline(latlngs, {//创建一条折线
      // 		color: 'red',//线的颜色
      // 		weight: 3 ,//线的粗细
      // 		// interactive: false,
      // }).addTo(this.map);//放入地图/图层中

      // polyline.on('mouseover',(e)=>{//绑定事件
      // 	polyline.setStyle({weight:6,color:'green'})
      // })

      // let wms = L.Geoserver.wms(
      //   "http://218.77.58.22:28088/geoserver/territory/wms",
      //   {
      //     layers: "territory:farmland",
      //     geometry_name: "wkb_geometry",
      //   }
      // ).addTo(this.map);

      this.map.on("click", (e) => {
        // ${latlng.lng} ${latlng.lat}
        let group = this.geoServerLayersGroup.getLayers();
        if (group && group.length > 0) {
          // console.log(group);
          // console.log(e);
          this.geoServerLayersQuery(e.latlng, group);
        }
      });

      this.geoServerLayersGroup.on("remove", (e) => {});

      // this.map.on('layeradd',(layer) =>{

      //
      // })

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
      wms.on("click", (e) => {
        debugger;
      });
      debugger;
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
          this.geoServerLayersGroup.removeLayer(item);
        }
      }
    },
    async geoServerLayersQuery(latlng, group) {
      let reverseGroup = group.reverse();
      for (let i = 0; i < reverseGroup.length; i++) {
        let item = reverseGroup[i];
        let index = item._url.indexOf("wms");
        let url = item._url.slice(0, index) + "wfs";
        let res = await getLayersInfo(url, {
          ...this.wfsParam,
          typeName: item.wmsParams.layers,
          CQL_FILTER: `CONTAINS(${item.wmsParams.geometry_name},SRID=4326;POINT(${latlng.lng} ${latlng.lat}))`,
        });
        if (res && res.features.length > 0) {
          this.geoServerPopup = L.popup()
            .setLatLng([latlng.lat, latlng.lng])
            .setContent("<p>有数据</p>")
            .openOn(this.map);
          break;
        }
      }
    },
    mapLocation(latlng) {
      // var latlngs = [
      //   //线中点的经纬度点
      //   [38, 0],
      //   [38, 180],
      //   [0, 0],
      // ];
      // let polyline = L.polyline(latlngs, {
      //   //创建一条折线
      //   color: "red", //线的颜色
      //   weight: 3, //线的粗细
      //   // interactive: false,
      // }).addTo(this.map); //放入地图/图层中

      // this.map.setView([e.latlng.lng, e.latlng.lat])
      // this.map.flyTo([e.latlng.lat, e.latlng.lng])
      // this.map.flyToBounds(this.geoServerLayersGroup);
      // this.map.flyToBounds(polyline);
      // this.map.flyToBounds(dian);

      this.map.flyTo(latlng);
      this.geoServerPopup = L.popup()
        .setLatLng(latlng)
        .setContent("<p>有数据</p>")
        .openOn(this.map);
    },
    imageShow(row) {
      if (row.imgShow) {
        var imageUrl =
          "https://img.net/v1/file/download?id=GF1_PMS2_E112.9_N29.6_20220523_L1A0006487068-MSS2_thumb&acl=22222222-2222-4222-a222-222222222222eyJraWQiOiJrMSIsImFsZyI6IlJTMjU2In0.eyJpc3MiOiJhZG1pbkBnaXN1bmkuY29tIiwiYXVkIjoidXVtcyIsImV4cCI6MTY2NzM3MjU4OCwianRpIjoiRUtUbFJKRUdpZ3VpVWpXVHBPTXNyZyIsImlhdCI6MTY2Njc2Nzc4OCwibmJmIjoxNjY2NzY3NDg4LCJzdWIiOiJzdXBlciIsImlkIjoic3VwZXIiLCJuYW1lIjoic3VwZXIiLCJ0eXBlIjoiMiIsImNsaWVudGlkIjpudWxsLCJmcm9tIjoidXVtcyIsImV4cGlyZXMiOiIxNjY3MzcyNTg4MzIzIiwicm9sZXMiOlsiQ0FUQUxPR19XUklURVIiLCJ0Y2JyeSIsIlJPTEVfU1VQRVIiLCJyZXFfcmVwb3J0IiwieHh0cSIsImd5Z2x5Iiwib21NYW5hZ2VyIl19.NK_SC-pY0K8SxY8fWFRIGBJoQ_G3tZ6A_ubVH_Rrp7KOqrc6rIQ-x6PU_YlXSU4l5qKwbz7SI7H8Ylgha_xkcDyeuVh1sw59m7luxuiCyvf-x9JmFEDjZ0wee6Xx3-fyeXqHG2a_GnhnBm5_sD8xoHmucNxecu7iKiI-aQJASE8nOLAruZdzSnCPgvVJgkXFXbOVWRZjWZbMU-6Am0pr-pb9pI-eor8vS9POBb7RKcp8EujFSTE-RbhGw1lGzw67aNm1gkmRQ4yvOnFIm_kMQP96Lr5zmLB1tsT_vn8CeYd6XXW40Ks-E_vL1d2hp1SOsoMtyMIH6N5c5IkGw5s1sw&isPreview=true&imagetype=3";
        let corner1 = L.latLng(28.932444755, 112.547377999);
        let corner2 = L.latLng(30.12990748, 113.968560462);
        let bounds = L.latLngBounds(corner1, corner2);
        let imageOverlay = L.imageOverlay(imageUrl, bounds, {
          interactive: true,
          address: row.name,
        });
        console.log(imageOverlay);
        imageOverlay.on("click", (e) => {
          console.log(e.target.options.address);
        });
        this.imageThumbnailGroup.addLayer(imageOverlay);
      } else {
        for (let item of this.imageThumbnailGroup.getLayers()) {
          if (item.options.address == row.name) this.map.removeLayer(item);
        }
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
