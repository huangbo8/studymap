<template>
  <div class="homepage-box">
    <header class="homepage-header">
      <h3>输电线路地质灾害监测预警场景构建</h3>
      <div>11</div>
    </header>
  </div>
</template>

<script>
import geoJson from "@/api/mapJson";
import { getAllAndroidPlugins, getList } from "@/api/qinqiu";

export default {
  name: "HomeView",
  components: {},
  data() {
    return {};
  },
  methods: {},
  async mounted() {},
};
</script>

<style lang="scss" scoped>
.homepage-box {
  height: 100%;
  background: url("../assets/homepage.png") center center no-repeat;
  background-size: 100% 100%;

  .homepage-header {
    box-sizing: border-box;
    position: relative;
    height: 15%;
    background: url("../assets/homepage-header.png") center center no-repeat;
    background-size: 100% 100%;
    >h3 {
      text-align: center;
      color: #03B4F5;
      font-size:30px;
      font-weight: 400;
    }
  }
}
</style>
