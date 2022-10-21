<template>
  <div class="map-box">
    <div class="layer-tools"><LayerTools></LayerTools></div>
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
    return {};
  },
  methods: {},
  async mounted() {},
};
</script>
    
    <style lang="scss" scoped>
.map-box {
  height: 100%;
  background: green;
  .layer-tools {
    position: absolute;
    right: 20px;
    top: 20px;
  }
}
</style>
    