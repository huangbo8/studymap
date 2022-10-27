<template>
  <div class="content-box">
    <div ref="trendChart" class="chart"></div>
    <div class="table"></div>
  </div>
</template>

<script>
import { getAllAndroidPlugins, getList } from "@/api/qinqiu";
import geoJson from "@/api/mapJson";
export default {
  components: {},
  data() {
    return {};
  },
  methods: {
    getEchartData() {
      const chart = this.$refs.trendChart;
      if (chart) {
        const myChart = this.$echarts.init(chart);
        // this.$echarts.registerMap("HK", geoJson);
        const option = {
          xAxis: {
            type: "category",
            data: [
              "1月",
              "2月",
              "3月",
              "4月",
              "5月",
              "6月",
              "7月",
              "8月",
              "9月",
              "10月",
              "11月",
              "12月",
            ],
            splitLine: {
              show: true,
              lineStyle: {
                color: "#383E59",
              },
            },
            axisLine: {
              lineStyle: {
                color: "#383E59",
              },
            },
            axisLabel: {
              color: "#fff",
            },
          },
          yAxis: {
            type: "value",
            splitLine: {
              show: true,
              lineStyle: {
                color: "#383E59",
              },
            },
            axisLabel: {
              color: "#fff",
            },
          },
          series: [
            {
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              type: "line",
              symbol: "none",
              smooth: true,
              lineStyle: {
                color: "#70B601",
              },
            },
            {
              data: [120, 932, 901, 934, 1290, 300, 1320],
              type: "line",
              symbol: "none",
              smooth: true,
              lineStyle: {
                color: "#F59A23",
              },
            },
            {
              data: [230, 932, 101, 934, 400, 1330, 1320],
              type: "line",
              symbol: "none",
              smooth: true,
              lineStyle: {
                color: "#D9001C",
              },
            },
          ],
          grid: {
            top: "20px",
            bottom: "20px",
            left: "10px",
            right: "10px",
            containLabel: true,
          },
          tooltip: {
            trigger: "axis",
            backgroundColor: "rgba(1,167,240,0.5)",
            borderColor: "#01A7F0",
            textStyle: {
              color: "white", //设置文字颜色
            },
            //   formatter: function (params) {
            //     debugger;
            //     // console.log(params) // 打印数据
            //     var showdata = params[0];
            //     // 根据自己的需求返回数据
            //     return `
            //  <div>本月：${showdata.data[1]}</div>
            //   <div>上月：${showdata.data[2]}</div>`;
            //   },
          },
        };
        myChart.setOption(option);
        window.addEventListener("resize", function () {
          myChart.resize();
        });
      }
      this.$on("hook:destroyed", () => {
        window.removeEventListener("resize", function () {
          myChart.resize();
        });
      });
    },
  },
  async mounted() {
    this.getEchartData();
  },
};
</script>

<style lang="scss" scoped>
.content-box {
  height: 100%;
  // display: flex;
  // flex-direction: column;
  .chart {
    height: 70%;
    // background-color: red;
  }
  .table {
    background-color: green;
    height: 30%;
  }
}
</style>
