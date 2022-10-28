<template>
  <div ref="mapEchart" class="content-box"></div>
</template>
    
    <script>
// import geoJson from "../../../api/hunanMap";
import geoJson from "@/api/hunanMap";

// import geoJson from "@/api/mapJson";
export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      mapStyle: {
        map: "HN",
        aspectScale: 0.9,
        // roam: true, //是否允许缩放
        //zoom: 1.1, //默认显示级别
        layoutSize: "95%",
        layoutCenter: ["50%", "50%"],
        itemStyle: {
          areaColor: {
            type: "radial",
            x: 0.7,
            y: 0.5,
            r: 0.4,
            colorStops: [
              {
                offset: 0,
                color: "#53a9bd", // 0% 处的颜色
              },
              {
                offset: 1,
                color: "#53a9bd", // 100% 处的颜色
              },
            ],
            global: false, // 缺省为 false
          },

          borderColor: "#28519d",
          borderWidth: 3,
        },
        emphasis: {
          itemStyle: {
            areaColor: "#6666ff",
          },
          label: {
            show: 0,
            color: "#fff",
          },
        },
        zlevel: 4,
      },
    };
  },
  methods: {
    getMapEchart() {
      // 柱状图 图中的位置
      var center = {
        长沙市: [113, 28.21],
        株洲市: [113.62, 26.79],
        湘潭市: [112.63, 27.59],
        衡阳市: [112.61, 26.89],
        邵阳市: [110.99, 26.78],
        岳阳市: [113.33, 28.89],
        常德市: [111.69, 29.05],
        张家界: [110.48, 29.13],
        益阳市: [111.67, 28.2],
        郴州市: [113, 25.79],
        永州市: [111.63, 26.22],
        怀化市: [109.95, 27.52],
        娄底市: [111.22, 27.7],
        湘西: [109.74, 28.31],
      };
      // 图中 省份字的位置
      var center2 = {
        长沙市: [113, 28.21],
        株洲市: [113.62, 26.79],
        湘潭市: [112.63, 27.59],
        衡阳市: [112.61, 26.89],
        邵阳市: [110.99, 26.78],
        岳阳市: [113.33, 28.89],
        常德市: [111.69, 29.05],
        张家界: [110.48, 29.13],
        益阳市: [111.67, 28.2],
        郴州市: [113, 25.79],
        永州市: [111.63, 26.22],
        怀化市: [109.95, 27.52],
        娄底市: [111.22, 27.7],
        湘西: [109.74, 28.31],
      };
      // 数据
      var data = [
        {
          name: "长沙市",
          value: (Math.random() * 1000 + 1000).toFixed(0),
          ziduan: "123",
        },
        {
          name: "株洲市",
          value: (Math.random() * 1000 + 1000).toFixed(0),
          ziduan: "123",
        },
        {
          name: "湘潭市",
          value: (Math.random() * 1000 + 1000).toFixed(0),
          ziduan: "123",
        },
        {
          name: "衡阳市",
          value: (Math.random() * 1000 + 1000).toFixed(0),
          ziduan: "123",
        },
        {
          name: "邵阳市",
          value: (Math.random() * 1000 + 1000).toFixed(0),
          ziduan: "123",
        },
        {
          name: "岳阳市",
          value: (Math.random() * 1000 + 1000).toFixed(0),
          ziduan: "123",
        },
        {
          name: "常德市",
          value: (Math.random() * 1000 + 1000).toFixed(0),
          ziduan: "123",
        },
        {
          name: "张家界",
          value: (Math.random() * 1000 + 1000).toFixed(0),
          ziduan: "123",
        },
        {
          name: "益阳市",
          value: (Math.random() * 1000 + 1000).toFixed(0),
          ziduan: "123",
        },
        {
          name: "郴州市",
          value: (Math.random() * 1000 + 1000).toFixed(0),
          ziduan: "123",
        },
        {
          name: "永州市",
          value: (Math.random() * 1000 + 1000).toFixed(0),
          ziduan: "123",
        },
        {
          name: "怀化市",
          value: (Math.random() * 1000 + 1000).toFixed(0),
          ziduan: "123",
        },
        {
          name: "娄底市",
          value: (Math.random() * 1000 + 1000).toFixed(0),
          ziduan: "123",
        },
        {
          name: "湘西",
          value: (Math.random() * 1000 + 1000).toFixed(0),
          ziduan: "123",
        },
      ];
      var lineData = data.map((item) => {
        return {
          coords: [
            center[item.name],
            [center[item.name][0], center[item.name][1] + item.value * 0.0001],
          ],
        };
      });
      var scatterData = data.map((item) => {
        return [
          center[item.name][0],
          center[item.name][1] + item.value * 0.0001,
        ];
      });
      var scatterData2 = data.map((item) => {
        return center[item.name];
      });
      var scatterData3 = data.map((item) => {
        return center2[item.name].concat(item.name);
      });

      const chart = this.$refs.mapEchart;
      if (chart) {
        const myChart = this.$echarts.init(chart);
        this.$echarts.registerMap("HN", geoJson);
        const option = {
          // 地图图层样式
          geo: [this.mapStyle],

          series: [
            {
              ...this.mapStyle,
              type: "map",
              label: {
                // show: true,
              },
              data: data,
            },

            // 画柱状图
            {
              type: "lines",
              zlevel: 5,
              effect: {
                show: false,
                period: 4, //箭头指向速度，值越小速度越快
                trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
                symbol: "arrow", //箭头图标
                symbolSize: 5, //图标大小
              },
              lineStyle: {
                width: 15, //尾迹线条宽度
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 0,
                  colorStops: [
                    {
                      offset: 0.1,
                      color: "rgba(238,197,86,0.5)", // 0% 处的颜色
                    },

                    {
                      offset: 1,
                      color: "rgba(238,197,86,1)", // 100% 处的颜色
                    },
                  ],
                  global: false, // 缺省为 false
                },
                opacity: 1, //尾迹线条透明度
                curveness: 0, //尾迹线条曲直度
              },
              label: {
                show: 0,
                position: "end",
                formatter: "245",
              },
              silent: true,
              data: lineData,
            },
            // 柱形数量显示
            {
              type: "scatter",
              coordinateSystem: "geo",
              geoIndex: 0,
              zlevel: 5,

              // label: {
              //   formatter: (p) => p.data[2],
              //   position: "bottom",
              //   color: "#fff",
              //   fontSize: 14,
              //   distance: 10,
              //   show: !0,
              // },

              label: {
                show: !0,
                position: "bottom",
                formatter: (params) => data[params.dataIndex].value,

                distance: 20,
                padding: [4, 8],
                // backgroundColor: "#003F5E",
                // borderRadius: 5,
                // borderColor: "#67F0EF",
                borderWidth: 1,
                color: "#e7c056",
              },
              symbol: "circle",
              symbolSize: [15, 8],
              itemStyle: {
                color: "#FEF03B",
                opacity: 1,
              },
              silent: true,
              data: scatterData,
            },
            // 图中圆点设置
            {
              type: "scatter",
              coordinateSystem: "geo",
              position: "top",
              geoIndex: 0,
              zlevel: 5,
              symbol: "circle",
              symbolSize: [25, 8],
              itemStyle: {
                color: "#F09B0A",
                opacity: 0.6,
                shadowColor: "rgba(0,0,0,0.3)",
                shadowBlur: 5,
                shadowOffsetY: 2,
              },
              label: {
                formatter: (p) => p.data[2],
                position: "top",
                color: "#fff",
                fontSize: 16,
                distance: 20,
                show: !0,
              },
              silent: true,
              data: scatterData3,
            },
            // {
            //   type: "effectScatter",
            //   coordinateSystem: "geo",
            //   geoIndex: 0,
            //   symbol: "circle",
            //   symbolSize: 4,
            //   showEffectOn: "render",
            //   rippleEffect: {
            //     brushType: "fill",
            //     scale: 10,
            //   },
            //   hoverAnimation: true,
            //   label: {
            //     formatter: (p) => p.data[2],
            //     position: "right",
            //     color: "#fff",
            //     fontSize: 14,
            //     distance: 10,
            //     show: !0,
            //   },
            //   itemStyle: {
            //     color: "#FEF134",
            //   },
            //   zlevel: 6,
            //   data: scatterData3,
            // },
          ],
          tooltip: {
            trigger: "item",
            backgroundColor: "rgba(1,167,240,0.5)",
            borderColor: "#01A7F0",
            textStyle: {
              color: "white", //设置文字颜色
            },
            formatter: function (params) {
              // debugger;
              // console.log(params) // 打印数据
              var showdata = params[0];
              // 根据自己的需求返回数据
              return `
             <div>本月：</div>
              <div>上月：</div>`;
            },
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
    this.getMapEchart();
  },
};
</script>
    
    <style lang="scss" scoped>
.content-box {
  height: 100%;
}
</style>
    