<template>
  <div id="openLayer">
    <div class="tool">
      <el-button @click="addLayers" type="primary">加载图层</el-button>
      <el-button @click="map.removeLayer(vector)" type="primary"
        >移除图层</el-button
      >
    </div>
  </div>
</template>

<script>
import axios from "axios";
import EsriJSON from "ol/format/EsriJSON";
import Map from "ol/Map";
import VectorSource from "ol/source/Vector";
import View from "ol/View";
import XYZ from "ol/source/XYZ";
import { Fill, Stroke, Style } from "ol/style";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import { fromLonLat } from "ol/proj";
import Icon from "ol/style/Icon";
export default {
  data() {
    return {
      featureLayerURL:
        "https://img.net/server001/rest/services/Hosted/a_20210512164917526_gcj02/FeatureServer/0/query/?f=json&where=1=1&geometryType=esriGeometryEnvelope&returnGeometry=true&spatialRel=esriSpatialRelIntersects",
      map: null,
      esrijsonFormat: null,
      vector: null,
      stylePoint: {
        image: new Icon({
          anchor: [0.5, 50],
          anchorOrigin: "top-left",
          anchorXUnits: "fraction",
          anchorYUnits: "pixels",
          offsetOrigin: "top-left",
          // offset: [5, 10],
          //图标缩放比例
          scale: 0.3,
          //透明度
          opacity: 1,
          // imgSize:[10,10],
          // img:<svg t="1611386292013" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1171" width="200" height="200"><path d="M512 186.5216c-152.4736 0-276.48 124.0064-276.48 276.48 0 94.1056 54.7328 163.5328 108.288 219.0336 39.168 40.6016 145.7152 145.7664 150.2208 150.2208 4.9664 4.9152 11.4688 7.3728 17.9712 7.3728 6.5024 0 12.9536-2.4576 17.92-7.3216 4.608-4.5056 112.7424-110.7456 150.4256-150.4256 53.4528-56.32 108.1344-126.3616 108.1344-218.88 0-152.4224-124.0064-276.48-276.48-276.48z m131.2256 460.1344c-27.9552 29.44-97.9968 98.7136-131.1744 131.4816-32.9216-32.6144-102.2464-101.376-131.4304-131.584C334.1824 598.3744 286.72 538.9312 286.72 463.0016c0-124.2112 101.0688-225.28 225.28-225.28s225.28 101.0688 225.28 225.28c0 74.3936-45.2096 132.1984-94.0544 183.6544z" p-id="1172" fill="#d81e06"></path><path d="M512 351.488c-59.2896 0-107.52 48.2304-107.52 107.52s48.2304 107.52 107.52 107.52 107.52-48.2304 107.52-107.52-48.2304-107.52-107.52-107.52z m0 163.84c-31.0784 0-56.32-25.2416-56.32-56.32s25.2416-56.32 56.32-56.32 56.32 25.2416 56.32 56.32-25.2416 56.32-56.32 56.32z" p-id="1173" fill="#d81e06"></path></svg>
          // color: fill.getColor(),
          //图标的url
          src: "https://img0.baidu.com/it/u=817618513,4041171496&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=413",
        }),
      },
    };
  },
  mounted() {
    this.createMap();
  },
  methods: {
    async createMap() {
      this.esrijsonFormat = new EsriJSON();
      const raster = new TileLayer({
        source: new XYZ({
          attributions:
            'Tiles © <a href="https://services.arcgisonline.com/ArcGIS/' +
            'rest/services/World_Topo_Map/MapServer">ArcGIS</a>',
          url:
            "https://server.arcgisonline.com/ArcGIS/rest/services/" +
            "World_Topo_Map/MapServer/tile/{z}/{y}/{x}",
        }),
      });
      this.map = new Map({
        layers: [raster],
        target: document.getElementById("openLayer"),
        view: new View({
          center: fromLonLat([112.59, 28.12]),
          zoom: 7,
        }),
      });
    },
    addLayers() {
      const vectorSource = new VectorSource();
      axios.get(this.featureLayerURL).then(({ data }) => {
        const features = this.esrijsonFormat.readFeatures(data);
        vectorSource.addFeatures(features);
      });

      this.vector = new VectorLayer({
        source: vectorSource,
        style: new Style(this.stylePoint),
      });
      this.map.addLayer(this.vector);
    },
    // removeLayers() {
    //   this.map.removeLayer(this.vector);
    // },
  },
};
</script>

<style scoped>
#openLayer {
  width: 100%;
  height: 100%;
  position: relative;
}
.tool {
  position: absolute;
  right: 10px;
  top: 10px;
  background: #fff;
  z-index: 999;
}
</style>
