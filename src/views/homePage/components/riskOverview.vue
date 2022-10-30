<template>
  <div class="content-box">
    <div class="num-box">
      <div class="time">
        <span>202210三期地灾风险点数量</span>
        <div>
          <span>环比上期+16.8%</span>
          <img src="@/assets/imgs/increase.png" alt="" />
        </div>
      </div>
      <div class="sum">
        <span class="figure">10213</span>
        <span class="unit">个</span>
      </div>

      <ul class="pillar">
        <li>
          <div style="height: 25px"></div>
        </li>
        <li>
          <div style="height: 31px"></div>
        </li>
        <li>
          <div style="height: 23px"></div>
        </li>
        <li>
          <div style="height: 25px"></div>
        </li>
        <li>
          <div style="height: 21px"></div>
        </li>
        <li>
          <div style="height: 25px"></div>
        </li>
        <li>
          <div style="height: 31px"></div>
        </li>
        <li>
          <div style="height: 23px"></div>
        </li>
        <li>
          <div style="height: 25px"></div>
        </li>
        <li>
          <div style="height: 21px"></div>
        </li>
        <li>
          <div style="height: 25px"></div>
        </li>
        <li>
          <div style="height: 31px"></div>
        </li>
        <li>
          <div style="height: 23px"></div>
        </li>
        <li>
          <div style="height: 25px"></div>
        </li>
        <li>
          <div style="height: 21px"></div>
        </li>
        <li>
          <div style="height: 25px"></div>
        </li>
        <li>
          <div style="height: 31px"></div>
        </li>
        <li>
          <div style="height: 23px"></div>
        </li>
        <li>
          <div style="height: 25px"></div>
        </li>
        <li>
          <div style="height: 21px"></div>
        </li>
      </ul>

      <div></div>
    </div>
    <div class="statistics">
      <div class="title">风险点城市排名</div>
      <div class="roll">
        <ul>
          <li>
            <div class="ranking">1</div>
            <div class="place-name">长沙</div>
            <div class="particulars">1200</div>
            <div class="proportion"></div>
          </li>
          <li>
            <div class="ranking">1</div>
            <div class="place-name">长沙</div>
            <div class="particulars">1200</div>
            <div class="proportion"></div>
          </li>
          <li>
            <div class="ranking">1</div>
            <div class="place-name">长沙</div>
            <div class="particulars">1200</div>
            <div class="proportion"></div>
          </li>
          <li>
            <div class="ranking">1</div>
            <div class="place-name">长沙</div>
            <div class="particulars">1200</div>
            <div class="proportion"></div>
          </li>
        </ul>
      </div>
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
  methods: {},
  async mounted() {},
};
</script>

<style lang="scss" scoped>
.content-box {
  height: 100%;
  box-sizing: border-box;
  padding: 10px;
  .num-box {
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    // background-color: red;
    .time {
      display: flex;
      justify-content: space-between;
      color: #fff;
      > div {
        font-size: 14px;
        display: flex;

        box-sizing: border-box;
        > img {
          width: 18px;
          height: 18px;
        }
      }
    }

    .sum {
      color: #fff;
      .figure {
        font-size: 35px;
        font-family: "DIN ", "DIN", sans-serif;
        font-weight: 700;
        margin: 0 10px;
      }
      .unit {
        // font-size: 1px;
      }
    }

    .pillar {
      box-sizing: border-box;
      padding: 0 10px;
      display: flex;
      // flex-direction: column-reverse;
      justify-content: space-between;
      li {
        width: 8px;
        border-radius: 10px;
        height: 31px;
        display: flex;
        flex-direction: column-reverse;
        > div {
          width: 100%;
          border-radius: 10px;
          background-color: rgba(2, 167, 240, 1);
        }
      }
    }
  }

  .statistics {
    height: 60%;
    // background-color: green;
    .title {
      // display: ;
      height: 40px;
      font-size: 16px;
      line-height: 40px;
      color: #fff;
    }

    .roll {
      position: relative;
      height: calc(100% - 30px);
      overflow: hidden;
      // background: red;
      > ul {
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        li {
          display: flex;
          height: 50px;
          align-items: center;
          justify-content: center;
          color: #fff;
          .ranking {
            width: 30px;
            height: 20px;
            background: url("@/assets/imgs/common-ranking.svg") center center;
            background-size: 100% 100%;
            text-align: center;
            line-height: 20px;
            margin-right: 10px;
          }

          .place-name {
            margin-right: 20px;
          }

          .particulars {
            margin-right: 10px;
          }
          .proportion {
            width: 130px;
            height: 8px;
            background-color: rgba(2, 167, 240, 1);
            border-radius: 166px;
          }
        }
      }
    }
  }
}
</style>
