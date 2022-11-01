<template>
  <div class="content-box">
    <div ref="trendChart" class="chart"></div>
    <div class="table">
      <header>
        <div>
          <span>最大值</span>
          <span>最小值</span>
          <span>平均值</span>
        </div>
      </header>
      <main>
        <div class="legend">
          <div><i style="background: #70b601"></i><span>一般关注</span></div>
          <div><i style="background: #f59a23"></i><span>持续关注</span></div>
          <div><i style="background: #d9001c"></i><span>重点关注</span></div>
        </div>
        <div class="form">
          <ul class="row">
            <li>123</li>
            <li>123</li>
            <li>123</li>
          </ul>
          <ul class="row">
            <li>123</li>
            <li>123</li>
            <li>123</li>
          </ul>
          <ul class="row">
            <li>123</li>
            <li>123</li>
            <li>123</li>
          </ul>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { getAllAndroidPlugins, getList } from "@/api/qinqiu";
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
              data: [
                820, 932, 901, 934, 1290, 1330, 1320, 1320, 1320, 1320, 1320,
                1320,
              ],
              type: "line",
              symbol: "none",
              smooth: true,
              itemStyle: {
                color: "#70B601",
              },
              lineStyle: {
                width: 3,
              },
            },
            {
              data: [
                120, 932, 901, 934, 1290, 300, 1320, 1320, 1320, 1320, 1320,
                1320,
              ],
              type: "line",
              symbol: "none",
              smooth: true,
              itemStyle: {
                color: "#F59A23",
              },
              lineStyle: {
                width: 3,
              },
            },
            {
              data: [
                230, 932, 101, 934, 400, 1330, 1320, 1320, 1320, 1320, 1320,
                1320,
              ],
              type: "line",
              symbol: "none",
              smooth: true,
              itemStyle: {
                color: "#D9001C",
              },
              lineStyle: {
                width: 3,
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
  .chart {
    height: 70%;
  }
  .table {
    height: 30%;
    padding: 0 2% 2% 0;
    box-sizing: border-box;
    > header {
      display: flex;
      justify-content: flex-end;
      height: 20px;
      > div {
        width: 60%;
        display: flex;
        > span {
          width: 33.33%;
          text-align: center;
          color: #02a7f0;
        }
      }
    }

    > main {
      height: calc(100% - 20px);
      display: flex;
      .legend {
        width: 40%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;
        > div {
          display: flex;
          justify-content: center;
          i {
            height: 20px;
            width: 30px;
            margin-right: 10px;
          }
          span {
            color: #ffffff;
          }
        }
      }
      .form {
        width: 60%;
        display: flex;
        justify-content: space-around;
        flex-direction: column;

        .row {
          display: flex;
          > li {
            width: 33.33%;
            text-align: center;
            color: #fff;
          }
        }
      }
    }
  }
}
</style>
