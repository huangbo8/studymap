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
      imgGeo: [
        [113.72519024732344, 28.989170083954694],
        [113.70856896140519, 28.929373477441388],
        [113.64714563343539, 28.942229416503263],
        [113.58580690432666, 28.95516444291683],
        [113.5246353072171, 28.96825145147042],
        [113.4635174087528, 28.981390829665173],
        [113.40227131506349, 28.99442266471333],
        [113.34085581915635, 29.00731062770935],
        [113.27941260696785, 29.02017900050929],
        [113.21809212525875, 29.03315955224995],
        [113.1568717874653, 29.046231815711337],
        [113.09558400610774, 29.0592478280717],
        [113.03520495055614, 29.0714972469666],
        [112.97473730619056, 29.083670295976503],
        [112.91435967185186, 29.095923074861663],
        [112.85414941299854, 29.108322718375238],
        [112.79400097770997, 29.120775755695032],
        [112.73375428497025, 29.13314095298362],
        [112.67338389854936, 29.145395434022017],
        [112.61302961221644, 29.157661475154594],
        [112.55283294051563, 29.170062931972936],
        [112.56875997224252, 29.229881765948573],
        [112.58469920735534, 29.289708342140436],
        [112.60065161758087, 29.349542902135397],
        [112.61661706603715, 29.409384831053746],
        [112.63259432737061, 29.46923270104339],
        [112.6485812049834, 29.529084378927088],
        [112.66457473485171, 29.588937220131136],
        [112.68057145765104, 29.648788300412747],
        [112.69656773476248, 29.70863469582577],
        [112.71256007976842, 29.768473754168603],
        [112.72854547563708, 29.828303364240814],
        [112.7445216490485, 29.888122167605363],
        [112.76048727714563, 29.947929717162822],
        [112.77644210803838, 30.00772655732818],
        [112.7923869841229, 30.067514207504548],
        [112.80832376600478, 30.127295073242344],
        [112.87023065045004, 30.11450506129504],
        [112.93224769480453, 30.101810170921688],
        [112.99443925009727, 30.089267201336153],
        [113.05666676813692, 30.0767565556037],
        [113.11874812792173, 30.064120673438946],
        [113.18066974064605, 30.05134849492851],
        [113.24259448560478, 30.0385824237218],
        [113.30465702828224, 30.025940293348928],
        [113.36679662526747, 30.01336982215537],
        [113.4275986561851, 30.000625078535073],
        [113.48822379601512, 29.987731364435316],
        [113.54878781037131, 29.974789467872867],
        [113.60946929712526, 29.96195478009788],
        [113.67030770901742, 29.94926144234374],
        [113.73116433407033, 29.93658828798023],
        [113.79189101950259, 29.923805728243742],
        [113.85250759482331, 29.91093032274357],
        [113.91317910188516, 29.898105063460658],
        [113.97401966797267, 29.885428576231014],
        [113.95738118139694, 29.82565840076366],
        [113.94075364858966, 29.765895202246995],
        [113.92413920715339, 29.706140283921577],
        [113.90753876444816, 29.64639398073618],
        [113.89095192103505, 29.586655606924584],
        [113.87437702034984, 29.526923510622666],
        [113.85781131952058, 29.467195229017012],
        [113.84125126450226, 29.407467735377992],
        [113.82469284260644, 29.34773773958027],
        [113.80813197803916, 29.288002032250372],
        [113.79156493193668, 29.228257824088523],
        [113.77498866801116, 29.168503052604027],
        [113.75840114831537, 29.10873662348489],
        [113.74180153047209, 29.04895856783555],
        [113.72519024732344, 28.989170083954694],
      ],
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
        this.imageScope(`${row.name}scope`);
        var imageUrl =
          "https://img.net/v1/file/download?id=GF1_PMS2_E112.9_N29.6_20220523_L1A0006487068-MSS2_thumb&acl=22222222-2222-4222-a222-222222222222eyJraWQiOiJrMSIsImFsZyI6IlJTMjU2In0.eyJpc3MiOiJhZG1pbkBnaXN1bmkuY29tIiwiYXVkIjoidXVtcyIsImV4cCI6MTY2NzM3MjU4OCwianRpIjoiRUtUbFJKRUdpZ3VpVWpXVHBPTXNyZyIsImlhdCI6MTY2Njc2Nzc4OCwibmJmIjoxNjY2NzY3NDg4LCJzdWIiOiJzdXBlciIsImlkIjoic3VwZXIiLCJuYW1lIjoic3VwZXIiLCJ0eXBlIjoiMiIsImNsaWVudGlkIjpudWxsLCJmcm9tIjoidXVtcyIsImV4cGlyZXMiOiIxNjY3MzcyNTg4MzIzIiwicm9sZXMiOlsiQ0FUQUxPR19XUklURVIiLCJ0Y2JyeSIsIlJPTEVfU1VQRVIiLCJyZXFfcmVwb3J0IiwieHh0cSIsImd5Z2x5Iiwib21NYW5hZ2VyIl19.NK_SC-pY0K8SxY8fWFRIGBJoQ_G3tZ6A_ubVH_Rrp7KOqrc6rIQ-x6PU_YlXSU4l5qKwbz7SI7H8Ylgha_xkcDyeuVh1sw59m7luxuiCyvf-x9JmFEDjZ0wee6Xx3-fyeXqHG2a_GnhnBm5_sD8xoHmucNxecu7iKiI-aQJASE8nOLAruZdzSnCPgvVJgkXFXbOVWRZjWZbMU-6Am0pr-pb9pI-eor8vS9POBb7RKcp8EujFSTE-RbhGw1lGzw67aNm1gkmRQ4yvOnFIm_kMQP96Lr5zmLB1tsT_vn8CeYd6XXW40Ks-E_vL1d2hp1SOsoMtyMIH6N5c5IkGw5s1sw&isPreview=true&imagetype=3";
        let corner1 = L.latLng(28.932444755, 112.547377999);
        let corner2 = L.latLng(30.12990748, 113.968560462);
        let bounds = L.latLngBounds(corner1, corner2);
        let imageOverlay = L.imageOverlay(imageUrl, bounds, {
          interactive: true,
          address: row.name,
        });
        // imageOverlay.on("click", (e) => {
        //   console.log(e.target.options.address);
        // });
        this.imageThumbnailGroup.addLayer(imageOverlay);
      } else {
        for (let item of this.imageThumbnailGroup.getLayers()) {
          if (
            item.options.address == row.name ||
            item.options.address == `${row.name}scope`
          )
            this.map.removeLayer(item);
        }
      }
    },
    imageScope(scope) {
      // var latlngs = this.imgGeo
      let arr = JSON.parse(JSON.stringify(this.imgGeo));
      for (let item of arr) {
        item.reverse();
      }
      console.log(this.imgGeo);
      var polygon = L.polygon(arr, { color: "red", address: scope });
      this.imageThumbnailGroup.addLayer(polygon);
      // 将地图放大到多边形的位置
      this.map.fitBounds(polygon.getBounds());

      polygon.on("click", (e) => {
        this.$parent.imageInfo();
        console.log(e.target.options.address);
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
