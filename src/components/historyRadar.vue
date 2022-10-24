<template>
  <div class="history-box">
    <header>
      <span>历史雷达影像</span>
      <i @click="$parent.historyRadarShow = false" class="el-icon-close"></i>
    </header>
    <ul>
      <li>
        <img src="@/assets/imgs/imgtest.webp" alt="" />
        <span>2022-10-13</span>
      </li>
      <li>
        <img src="@/assets/imgs/imgtest.webp" alt="" />
        <span>2022-10-13</span>
      </li>
      <li>
        <img src="@/assets/imgs/imgtest.webp" alt="" />
        <span>2022-10-13</span>
      </li>
      <li>
        <img src="@/assets/imgs/imgtest.webp" alt="" />
        <span>2022-10-13</span>
      </li>
      <li>
        <img src="@/assets/imgs/imgtest.webp" alt="" />
        <span>2022-10-13</span>
      </li>
      <li>
        <img src="@/assets/imgs/imgtest.webp" alt="" />
        <span>2022-10-13</span>
      </li>
      <li>
        <img src="@/assets/imgs/imgtest.webp" alt="" />
        <span>2022-10-13</span>
      </li>
      <li>
        <img src="@/assets/imgs/imgtest.webp" alt="" />
        <span>2022-10-13</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { getAllAndroidPlugins, getList } from "@/api/qinqiu";

export default {
  name: "HistoryRadar",
  components: {},
  data() {
    return {};
  },
  methods: {},
  async mounted() {},
};
</script>

<style lang="scss" scoped>
.history-box {
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 3px 14px rgb(0 0 0 / 40%);
  > header {
    height: 33px;
    line-height: 33px;
    display: flex;
    justify-content: space-between;
    background-color: rgba(58, 142, 230, 0.8);
    color: #fff;
    padding: 0 10px;
    > i {
      cursor: pointer;
      font-size: 18px;
      line-height: 33px !important;
    }
  }

  > ul {
    height: calc(100% - 33px);
    overflow-y: auto;
    box-sizing: border-box;
    padding: 15px;
    li {
      text-align: center;
      margin-bottom: 15px;
      > img {
        width: 100%;
        height: 150px;
        background: #fff;
        box-sizing: border-box;
        padding: 10px;
        cursor: pointer;
      }
    }
  }
}
</style>
