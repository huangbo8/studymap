<template>
  <div class="homepage-box">
    <header class="homepage-header">
      <h3>输电线路地质灾害监测预警场景构建</h3>

      <ul class="tab-box">
        <li><span>雷达影像</span></li>
        <li><span>监测成果</span></li>
        <li><span>预警分析</span></li>
      </ul>

      <div class="roll"><i class="el-icon-bell"></i>123</div>
    </header>

    <main>
      <div class="left-box">
        <div class="category">
          <header>
            <img src="@/assets/imgs/homepage-xie.svg" alt="" />
            <img src="@/assets/imgs/homepage-xie.svg" alt="" />
            <img src="@/assets/imgs/homepage-xie.svg" alt="" />
            <span>风险点处理情况</span>
          </header>
          <div class="category-statistics">
            <RiskPointDispose></RiskPointDispose>
          </div>
        </div>
        <div class="category">
          <header>
            <img src="@/assets/imgs/homepage-xie.svg" alt="" />
            <img src="@/assets/imgs/homepage-xie.svg" alt="" />
            <img src="@/assets/imgs/homepage-xie.svg" alt="" />
            <span>风险点发展趋势</span>
          </header>
          <div class="category-statistics">
            <RiskPointTrend></RiskPointTrend>
          </div>
        </div>
      </div>

      <div class="middle-box"><RickMap></RickMap></div>

      <div class="right-box">
        <div class="category">
          <header>
            <img src="@/assets/imgs/homepage-xie.svg" alt="" />
            <img src="@/assets/imgs/homepage-xie.svg" alt="" />
            <img src="@/assets/imgs/homepage-xie.svg" alt="" />
            <span>最新风险概览 </span>
          </header>
          <div class="category-statistics"><RiskOverview></RiskOverview></div>
        </div>
        <div class="category">
          <header>
            <img src="@/assets/imgs/homepage-xie.svg" alt="" />
            <img src="@/assets/imgs/homepage-xie.svg" alt="" />
            <img src="@/assets/imgs/homepage-xie.svg" alt="" />
            <span>风险监测</span>
          </header>
          <div class="category-statistics"><RickMonitor></RickMonitor></div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import geoJson from "@/api/mapJson";
import { getAllAndroidPlugins, getList } from "@/api/qinqiu";
import RiskPointDispose from "./components/riskPointDispose.vue";
import RiskPointTrend from "./components/riskPointTrend.vue";
import RickMap from "./components/rickMap.vue";
import RiskOverview from "./components/riskOverview.vue";
import RickMonitor from "./components/rickMonitor.vue";
export default {
  name: "HomeView",
  components: {
    RiskPointDispose,
    RiskPointTrend,
    RickMap,
    RiskOverview,
    RickMonitor,
  },
  data() {
    return {};
  },
  methods: {},
  async mounted() {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/homePage.scss";
</style>
