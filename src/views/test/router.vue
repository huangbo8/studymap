<template>
    <div class="center">
      <el-button @click="leaveFor('/map')" type="primary">leaflet</el-button>
      <el-button @click="leaveFor('/leafletDraw')" type="primary"
        >leafletDraw</el-button
      >
      <el-button @click="leaveFor('/openLayers')" type="primary"
        >openLayers</el-button
      >
      <el-button @click="leaveFor('/flex')" type="primary">flex</el-button>
  
      <div ref="chart" style="width: 50%; height: 376px"></div>
    </div>
  </template>
  
  <script>
  import { getAllAndroidPlugins, getList } from "@/api/qinqiu";
  
  export default {
    name: "HomeView",
    components: {},
    data() {
      return {};
    },
    methods: {
      leaveFor(url) {
        this.$router.push(url);
      },
    },
    async mounted() {


      let data = {
        page: 1,
        limit: 10,
      };
       let {result} = await getList(data)
      //  debugger
       console.log(result.rows)
    },
  };
  </script>
  
  <style>
  .center {
    padding: 10px;
    text-align: center;
  }
  </style>
  