<template>
  <el-popover
    placement="left-start"
    width="249"
    trigger="manual"
    v-model="isShow"
  >
    <el-tree
      :data="layerData"
      show-checkbox
      node-key="id"
      :default-expanded-keys="[2, 3]"
      :default-checked-keys="[5]"
      :props="defaultProps"
      @check-change="handleCheckChange"
    >
    </el-tree>
    <div class="layer-box" slot="reference" @click="isShow = !isShow">
      <img src="@/assets/imgs/layer-tools.png" alt="" />
    </div>
  </el-popover>
</template>

<script>
export default {
  name: "LayerTools",
  components: {},
  data() {
    return {
      layerData: [
        {
          id: 1,
          label: "图层1",
          url: "http://192.168.0.112:8080/geoserver/mydata/wms",
          option: {
            layers: "mydata:CHN_adm3_xian",
          },
          // children: [
          //   {
          //     id: 4,
          //     label: "二级 1-1",

          //   },
          // ],
        },
        {
          id: 2,
          label: "图层2",
          url: "http://218.77.58.22:28088/geoserver/territory/wms",
          option: {
            layers: "territory:farmland",
          },
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
      isShow: false,
    };
  },
  methods: {
    handleCheckChange(data, checked, indeterminate) {
      if (checked) {
        this.$emit("addGeoServerLayers", data);
      } else {
        this.$emit("removeGeoServerLayers", data);
      }
      // debugger
    },
  },
  async mounted() {},
};
</script>

<style lang="scss" scoped>
.layer-box {
  width: 35px;
  height: 35px;
  border-radius: 3px;
  background: #fff;
  box-shadow: 0 16rpx 16rpx rgba(10, 16, 20, 0.24),
    0 0 16rpx rgba(10, 16, 20, 0.12);
  text-align: center;
  line-height: 32px;
  cursor: pointer;
  > img {
    height: 80%;
    width: 80%;
    vertical-align: middle;
  }
}
</style>
