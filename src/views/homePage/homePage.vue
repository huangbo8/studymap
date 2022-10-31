<template>
  <div class="homepage-box">
    <header class="homepage-header">
      <h3>输电线路地质灾害监测预警场景构建</h3>

      <ul class="tab-box">
        <li @click="skip('radarImage')"><span>雷达影像</span></li>
        <li @click="skip('monitorResults')"><span>监测成果</span></li>
        <li @click="skip('warningAnalysis')"><span>预警分析</span></li>
      </ul>

      <ul class="system-info">
        <li class="date">
          <div>{{ hourMinuteSecond }}</div>
          <div>{{ yearToDate }}</div>
        </li>
        <li>
          <span>{{ getWeekDate() }}</span>
        </li>
        <li>
          <i class="el-icon-location-information"></i>
          <span>长沙</span>
        </li>
        <li>
          <el-badge :value="12" class="item">
            <i style="color: #d81e07" class="el-icon-bell icon-size"></i>
          </el-badge>
        </li>
        <li><i class="el-icon-menu icon-size"></i></li>
      </ul>

      <div class="roll">
        <ul ref="newsMove">
          <li><i class="el-icon-bell"></i>1</li>
          <li><i class="el-icon-bell"></i>2</li>
          <li><i class="el-icon-bell"></i>3</li>
          <li><i class="el-icon-bell"></i>4</li>
          <li><i class="el-icon-bell"></i>5</li>
          <li><i class="el-icon-bell"></i>6</li>
          <li><i class="el-icon-bell"></i>7</li>
          <li><i class="el-icon-bell"></i>8</li>
          <li><i class="el-icon-bell"></i>9</li>
          <li><i class="el-icon-bell"></i>10</li>
        </ul>
      </div>
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
    return {
      hourMinuteSecond: "",
      yearToDate: "",
      newsPage: 0,
    };
  },
  methods: {
    skip(componentName) {
      this.$router.push({
        path: "/disaster",
        query: {
          componentName,
        },
      });
    },
    time() {
      setInterval(() => {
        var time = new Date();
        var year = time.getFullYear(); //获取年份
        var month = time.getMonth() + 1; //获取月份
        var day = time.getDate(); //获取日期
        var hour = checkTime(time.getHours()); //获取时
        var minite = checkTime(time.getMinutes()); //获取分
        var second = checkTime(time.getSeconds()); //获取秒
        /****当时、分、秒、小于10时，则添加0****/
        function checkTime(i) {
          if (i < 10) return "0" + i;
          return i;
        }
        this.yearToDate = year + "-" + month + "-" + day;
        this.hourMinuteSecond = hour + ":" + minite + ":" + second;
      }, 1000);
    },
    getWeekDate() {
      var now = new Date();
      var day = now.getDay();
      var weeks = new Array(
        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六"
      );
      var week = weeks[day];
      return week;
    },
    move() {
      setInterval(() => {
        let newsMove = this.$refs.newsMove;
        this.newsPage++;
        if (this.newsPage > 9) {
          this.newsPage = 0;
        }
        newsMove.style.top = `-${this.newsPage * 20}px`;
      }, 2000);
    },
  },
  mounted() {
    this.time();
    this.move();
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/homePage.scss";
</style>
