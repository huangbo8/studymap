<template>
  <div class="center">
    <el-button @click="leaveFor('/map')" type="primary">leaflet</el-button>
    <el-button @click="leaveFor('/leafletDraw')" type="primary">leafletDraw</el-button>
    <el-button @click="leaveFor('/openLayers')" type="primary">openLayers</el-button>
    <el-button @click="leaveFor('/flex')" type="primary">flex</el-button>
  </div>
</template>

<script>
export default {  
  name: "HomeView",
  components: {},
  data() {
    return {};
  },
  methods: {
    leaveFor(url) {
      this.$router.push(url)
    }
  },
  mounted() {},
};
</script>

<style>
  .center {
    padding: 10px;
    text-align: center;
  }
</style>
