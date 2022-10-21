<template>
  <el-popover placement="left-start" width="400" trigger="click">
    <el-tree
      :data="layerData"
      show-checkbox
      node-key="id"
      :default-expanded-keys="[2, 3]"
      :default-checked-keys="[5]"
      :props="defaultProps"
    >
    </el-tree>
    <div class="layer-box" slot="reference">
      <img src="@/assets/layer-tools.png" alt="" />
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
          label: "一级 1",
          children: [
            {
              id: 4,
              label: "二级 1-1",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1",
                },
                {
                  id: 10,
                  label: "三级 1-1-2",
                },
              ],
            },
          ],
        },
        {
          id: 2,
          label: "一级 2",
          children: [
            {
              id: 5,
              label: "二级 2-1",
            },
            {
              id: 6,
              label: "二级 2-2",
            },
          ],
        },
        {
          id: 3,
          label: "一级 3",
          children: [
            {
              id: 7,
              label: "二级 3-1",
            },
            {
              id: 8,
              label: "二级 3-2",
            },
          ],
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
    };
  },
  methods: {},
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
  