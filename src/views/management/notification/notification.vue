<template>
  <div class="content-box">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="全部" name="first"></el-tab-pane>
      <el-tab-pane label="告警" name="second"></el-tab-pane>
    </el-tabs>
    <ul class="list-box">
      <li @click="particulars">
        <img src="@/assets/imgs/warning-icon.png" alt="" />
        <div class="message">
          <div>
            <span style="font-weight: 600; color: #000">【告警】</span>
            <span>复奉线489号杆塔出现重点关注风险点！请尽快处理！</span>
          </div>
          <span>今天 19:55</span>
        </div>

        <div class="hint"></div>
      </li>
    </ul>

    <el-dialog
      :close-on-click-modal="false"
      title="消息"
      :visible.sync="dialogVisible"
      width="20%"
    >
      <div class="detail">
        <img src="@/assets/imgs/warning-icon.png" alt="" />
        <span>复奉线489号杆塔出现重点关注风险点！请尽快处理！</span>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button size="small" type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "second",
      dialogVisible: false,
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    particulars() {
      this.dialogVisible = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.content-box {
  height: 100%;

  ::v-deep .el-tabs__nav-scroll {
    padding-left: 20px !important;
  }
  .list-box {
    height: calc(100% - 80px);
    box-sizing: border-box;
    padding: 0 30px;
    overflow-y: auto;
    li {
      position: relative;
      display: flex;
      align-items: center;
      height: 70px;
      border-bottom: 1px solid #f2f2f2;
      cursor: pointer;
      > img {
        width: 36px;
        height: 36px;
        margin-right: 20px;
      }

      .message {
        > span {
          font-size: 14px;
          padding-left: 10px;
        }
        color: #7f7f7f;
      }

      .hint {
        position: absolute;
        left: 0px;
        top: 10px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #d81e07;
        // border: 1px solid #000;
      }
    }
  }

  .detail {
    display: flex;
    align-items: center;
    > img {
      width: 36px;
      height: 36px;
      margin-right: 20px;
    }
  }
}
</style>
