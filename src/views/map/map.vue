<template>
  <div id="map">
    <div class="tool">
      <el-button @click="addLayers" type="primary">加载图层</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      map: null,
      layers: null,
      featureLayerURL:
        "https://img.net/server001/rest/services/Hosted/a_20210512164917526_gcj02/FeatureServer/0",
      icon: {
        iconUrl: "https://esri.github.io/esri-leaflet/img/earthquake-icon.png",
        iconSize: [27, 31],
        iconAnchor: [13.5, 17.5],
        popupAnchor: [0, -11],
      },
    };
  },
  mounted() {
    this.createMap();
  },
  methods: {
    createMap() {
      this.map = L.map("map", {
        center: [28.12, 112.59],
        zoom: 10,
      });

      L.tileLayer
        .chinaProvider("Geoq.Normal.Map", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        })
        .addTo(this.map);

      L.marker([28.12, 112.59])
        .addTo(this.map)
        .bindPopup("A pretty CSS3 popup.<br> Easily customizable.")
        .openPopup();
    },
    addLayers() {
      this.$testMap.addMapLayers(this.map, {
        url: this.featureLayerURL,
        pointToLayer: function (geojson, latlng) {
          return L.marker(latlng, {
            icon: icon,
          });
        },
      });
    },
  },
};
</script>

<style scoped>
#map {
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
