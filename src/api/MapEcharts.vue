<template>
  <div id="mapBoxBig" ref="myBoxBigMap"></div>
</template>

<script>
import jiaxingMap from "@/api/jiaxingMap";
export default {
  props: {
    mapData: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
  watch: {
    mapData: {
      handler(val, oldVal) {
        this.$nextTick(() => {
          this.ininEcharts(val);
        });
      },
      deep: true,
    },
  },
  mounted() {
    // 初始化地图数据
    // this.ininEcharts(this.mapData);
  },
  methods: {
    ininEcharts(cityDataList) {
      const _this = this;
      let myChart = _this.$echarts.init(this.$refs["myBoxBigMap"]);
      let yData = [];
      let areaColorBlue = {
        type: "radial",
        x: 0.5,
        y: 0.5,
        r: 0.8,
        colorStops: [
          {
            offset: 0,
            color: "#2D5C83", // 0% 处的颜色
          },
          {
            offset: 1,
            color: "#3D8DC3", // 100% 处的颜色
          },
        ],
        global: false, // 缺省为 false
      };
      let areaColorOra = {
        type: "radial",
        x: 0.5,
        y: 0.5,
        r: 0.8,
        colorStops: [
          {
            offset: 0,
            color: "#C7A428", // 0% 处的颜色
          },
          {
            offset: 1,
            color: "#E09046", // 100% 处的颜色
          },
        ],
        global: false, // 缺省为 false
      };
      this.mapData.map((item) => {
        yData.push({
          name: item.areaName,
          areaCode: item.areaCode,
          areaDetail: item.areaDetail,
          // itemStyle: {
          //   normal: {
          //     areaColor:
          //       item.areaName === "秀洲区" ||
          //       item.areaName === "平湖市" ||
          //       item.areaName === "海盐县"
          //         ? areaColorOra
          //         : areaColorBlue,
          //   },
          // },
          itemStyle: {
            normal: {
              areaColor:
                item.warningDetail.length > 0 ? areaColorOra : areaColorBlue,
              borderColor:
                item.warningDetail.length > 0 ? "#FFD31B" : "#83F5FC",
            },
          },
          label: {
            normal: {
              textStyle: {
                color: "#fff",
              },
              formatter: function (params) {
                return `{a|}${params.name}`;
              },
              rich: {
                a: {
                  backgroundColor: {
                    image:
                      item.warningDetail.length > 0
                        ? require("@/assets/imgs/map2.svg")
                        : require("@/assets/imgs/map1.svg"),
                  },
                  height: 20,
                },
              },
            },
          },
        });
      });
      _this.$echarts.registerMap("mapEchart", jiaxingMap);
      myChart.setOption({
        geo: {
          map: "mapEchart",
          show: true,
          selectedMode: "single",
          label: {
            normal: {
              show: false,
            },
            emphasis: {
              show: false,
            },
          },
          itemStyle: {
            normal: {
              shadowColor: "rgba(135,255,241,0.2)",
              shadowOffsetX: 5,
              shadowOffsetY: 40,
            },
          },
        },
        tooltip: {
          show: true,
          trigger: "item",
          position: function (point, params, dom, rect, size) {
            // 跟随鼠标移动
            _this.mouseFollow(point, params, dom, rect, size);
          },
          textStyle: {
            fontSize: 16,
          },
          formatter: function ({ data }) {
            _this.$emit("mapClick", {
              areaName: data.name,
              areaCode: data.areaCode,
            });
            return;
          },
        },
        dataRange: {
          show: false,
          splitList: [{ end: 0.5 }, { start: 0.5 }],
          color: ["#fff", "#4486F8"],
        },
        series: [
          {
            type: "map",
            map: "mapEchart",
            zoom: 1.2,

            //每一块区域的颜色
            itemStyle: {
              normal: {
                label: { show: true },
                borderWidth: 1,
                shadowColor: "rgba(0, 0, 0, 0.1)",
              },
              // 鼠标悬浮当前所在的区域块的相关设置
              emphasis: {
                areaColor: {
                  type: "radial",
                  x: 0.5,
                  y: 0.5,
                  r: 0.8,
                  colorStops: [
                    {
                      offset: 0,
                      color: "#5D85F4", // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#3E5EDF", // 100% 处的颜色
                    },
                  ],
                  global: false, // 缺省为 false
                }, //区域块的颜色
              },
            },
            select: {
              itemStyle: {
                areaColor: "#e98d3e",
              },
            },
            data: yData,
          },
        ],
      });
      window.addEventListener("resize", function () {
        myChart.resize();
      });
      myChart.on("click", (data) => {
        let areaName = "no";
        let areaCode = "no";
        if (data.data) {
          areaName = data.data.name;
          areaCode = data.data.areaCode;
        }
        this.$emit("mapClick", {
          areaName: areaName,
          areaCode: areaCode,
        });
      });
    },
    // tooltip跟随鼠标移动
    mouseFollow(point, params, dom, rect, size) {
      // 鼠标坐标和提示框位置的参考坐标系是：以外层div的左上角那一点为原点，x轴向右，y轴向下
      // 提示框位置
      var x = 0; // x坐标位置
      var y = 0; // y坐标位置

      // 当前鼠标位置
      var pointX = point[0];
      var pointY = point[1];

      // 外层div大小
      // var viewWidth = size.viewSize[0]
      // var viewHeight = size.viewSize[1]

      // 提示框大小
      var boxWidth = size.contentSize[0];
      var boxHeight = size.contentSize[1];

      // boxWidth > pointX 说明鼠标左边放不下提示框
      if (boxWidth > pointX) {
        x = 5; // 自己定个x坐标值，以防出屏
        y -= 15; // 防止点被覆盖住，可根据情况自行调节
      } else {
        // 左边放的下
        x = pointX - boxWidth - 15;
      }

      // boxHeight > pointY 说明鼠标上边放不下提示框
      // console.log(boxHeight)
      // console.log(pointY)
      if (boxHeight + 20 > pointY) {
        y = pointY + 15;
      } else if (boxHeight > pointY) {
        y = 5;
      } else {
        // 上边放得下
        y += pointY - boxHeight;
      }
      return [x, y];
    },
  },
};
</script>

<style lang="scss">
#mapBoxBig {
  width: 100%;
  height: 100%;
}
</style>
