<template>
  <div class="disaster-box">
    <header>
      <span class="headline">输电线路地质灾害监测预警场景构建</span>
      <ul class="tab-box">
        <li
          v-for="item in tabData"
          :key="item.name"
          :class="{ 'border-cut': item.name == cut }"
          @click="skip(item.name)"
        >
          {{ item.name }}
        </li>
      </ul>
    </header>
    <main>
      <aside :class="{ 'sidebar-retract': sidebarRetract }">
        <div class="flexible" @click="sidebarRetract = !sidebarRetract">
          <i class="el-icon-caret-left" v-if="!sidebarRetract"></i>
          <i class="el-icon-caret-right" v-else></i>
        </div>
        <RadarImage></RadarImage>
      </aside>
      <MasterMap></MasterMap>
    </main>
  </div>
</template>
  
  <script>
import geoJson from "@/api/mapJson";
import { getAllAndroidPlugins, getList } from "@/api/qinqiu";
import MasterMap from "@/components/MasterMap.vue";
import RadarImage from "./components/radarImage.vue";

export default {
  name: "HomeView",
  components: { MasterMap, RadarImage },
  data() {
    return {
      tabData: [
        { name: "雷达影像" },
        { name: "监测成果" },
        { name: "预警分析" },
      ],
      cut: "雷达影像",
      sidebarRetract: false,
    };
  },
  methods: {
    skip(name) {
      this.cut = name;
    },
    flexible() {},
  },
  async mounted() {},
};
</script>
  
  <style lang="scss" scoped>
.disaster-box {
  height: 100%;
  > header {
    position: relative;
    height: 80px;
    line-height: 80px;
    background: url("../../assets/disaster-header.png") center center no-repeat;
    background-size: 100% 100%;
    box-sizing: border-box;
    padding: 0 20px;
    .headline {
      color: #fff;
      font-weight: 400;
      font-size: 25px;
    }
    .tab-box {
      width: 450px;
      height: 100%;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      justify-content: space-between;
      li {
        width: 33%;
        text-align: center;
        height: 75px;
        color: #aaaaaa;
        font-size: 25px;
        line-height: 100px;
        cursor: pointer;
      }
      .border-cut {
        border-bottom: 3px solid #3a8ee6;
        color: #d7d7d7;
      }
    }
  }

  > main {
    position: relative;
    height: calc(100% - 80px);

    .sidebar-retract {
      left: -20% !important;
      transition: left 0.3s;
    }
    > aside {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 20%;
      background: #fff;
      z-index: 999;
      transition: left 0.3s;
      box-shadow: 15px 0px 5px rgb(85 85 85 / 30%);
      .flexible {
        position: absolute;
        top: 50%;
        right: -16px;
        transform: translateY(-50%);
        height: 80px;
        line-height: 80px;
        width: 16px;
        text-align: center;
        background: #fff;
        color: #3a8ee6;
        border-radius: 0 8px 8px 0;
        cursor: pointer;
      }
    }
    .map-box {
      height: 100%;
    }
    .layer-tools {
      position: absolute;
      right: 20px;
      top: 20px;
    }
  }
}
</style>
  