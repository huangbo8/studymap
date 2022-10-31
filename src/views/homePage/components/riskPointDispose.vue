<template>
  <div class="content-box">
    <ul>
      <li>
        <div class="pillar">
          <span :style="{ background: '#d9001b', height: '20%' }"></span>
          <span :style="{ background: '#5c011a', height: '80%' }"></span>
        </div>
        <div class="quantity">
          <div class="up-down">
            <p>20</p>
            <div>
              <span>已处理</span>
              <span>重点关注</span>
            </div>
          </div>
          <div class="up-down">
            <p>20</p>
            <div>
              <span>已处理</span>
              <span>重点关注</span>
            </div>
          </div>
        </div>
      </li>
      <li>
        <div class="pillar">
          <span :style="{ background: '#f59a23', height: '20%' }"></span>
          <span :style="{ background: '#683f1d', height: '80%' }"></span>
        </div>
        <div class="quantity">
          <div class="up-down">
            <p>20</p>
            <div>
              <span>已处理</span>
              <span>持续关注</span>
            </div>
          </div>
          <div class="up-down">
            <p>20</p>
            <div>
              <span>已处理</span>
              <span>持续关注</span>
            </div>
          </div>
        </div>
      </li>
      <li>
        <div class="pillar">
          <span :style="{ background: '#70b603', height: '20%' }"></span>
          <span :style="{ background: '#334b13', height: '80%' }"></span>
        </div>
        <div class="quantity">
          <div class="up-down">
            <p>20</p>
            <div>
              <span>已处理</span>
              <span>一般关注</span>
            </div>
          </div>
          <div class="up-down">
            <p>20</p>
            <div>
              <span>已处理</span>
              <span>一般关注</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
    
<script>
import { getAllAndroidPlugins, getList } from "@/api/qinqiu";

export default {
  components: {},
  data() {
    return {};
  },
  methods: {},
  async mounted() {},
};
</script>
    
    <style lang="scss" scoped>
.content-box {
  height: 100%;

  > ul {
    display: flex;
    height: 100%;

    > li {
      width: 33.33%;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      .pillar {
        height: 90%;
        width: 10px;
        // background: red;
        display: flex;
        flex-direction: column;
      }
      .quantity {
        height: 80%;
        width: 82px;
        // background: green;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        justify-content: space-between;
        color: #fff;
        .up-down {
          > p {
            font-size: 25px;
            border-bottom: 2px solid #fff;
            margin-bottom: 5px;
          }

          > div {
            > span {
              display: block;
              font-size: 12px;
            }
          }

          > p,
          > div {
            padding-left: 10px;
          }
        }
      }
    }
  }
}
</style>
    