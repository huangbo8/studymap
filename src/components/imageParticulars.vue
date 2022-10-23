<template>
  <el-dialog
    :close-on-click-modal="false"
    title="雷达影像"
    :visible.sync="dialogTableVisible"
  >
    <div class="container">
      <div class="img-box"><img src="@/assets/imgs/imgtest.webp" alt="" /></div>
      <div class="text-box">
        <ul>
          <li>
            <span class="title">标题</span>
            <span class="content"
              >123123123123123123123123123123123123123123123123123123123123123123</span
            >
          </li>
          <li>
            <span class="title">标题</span>
            <span class="content">123</span>
          </li>
          <li>
            <span class="title">标题</span>
            <span class="content">123</span>
          </li>
          <li>
            <span class="title">标题</span>
            <span class="content">123</span>
          </li>

          <li>
            <span class="title">标题</span>
            <span class="content">123</span>
          </li>
          <li>
            <span class="title">标题</span>
            <span class="content">123</span>
          </li>
          <li>
            <span class="title">标题</span>
            <span class="content">123</span>
          </li>
          <li>
            <span class="title">标题</span>
            <span class="content">123</span>
          </li>
        </ul>
      </div>
    </div>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogTableVisible = false">关 闭</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { getAllAndroidPlugins, getList } from "@/api/qinqiu";

export default {
  name: "ImageParticulars",
  components: {},
  data() {
    return {
      dialogTableVisible: false,
    };
  },
  methods: {},
  async mounted() {},
};
</script>

<style lang="scss" scoped>
.container {
  border: 1px solid #e8e8e8;
  width: 100%;
  display: flex;
  > div {
    box-sizing: border-box;
  }
  .img-box {
    width: 40%;
    border-right: 1px solid #e8e8e8;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 10px;
    > img {
      width: 100%;
    }
  }
  .text-box {
    width: 60%;
    > ul {
      //   border-right: 1px solid #e8e8e8;
      //   border-bottom: 1px solid #e8e8e8;
      height: 100%;
      li {
        display: flex;
        padding: 0 10px;
        box-sizing: border-box;
        border-bottom: 1px solid #e8e8e8;
        > span {
          padding: 10px;
        }
        .title {
          width: 20%;
          text-align: right;
          border-right: 1px solid #e8e8e8;
          display: flex;
          //   align-items: center;
          justify-content: center;
          flex-direction: column;
        }
        .content {
          width: 80%;
        }
      }
      li:last-child {
        border-bottom: none;
      }
    }
  }
}
</style>
