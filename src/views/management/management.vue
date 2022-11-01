<template>
  <div class="management-box">
    <nav>
      <div class="logo-box" @click="$router.push('/')">地质灾害监测预警</div>
      <el-menu
        :default-active="routingPath"
        background-color="#000"
        text-color="#fff"
        active-text-color="#409eff"
        @select="jumpTo"
      >
        <el-menu-item
          v-for="item in routeData"
          :key="item.name"
          :index="item.path"
        >
          <i :class="item.icon"></i>
          <span slot="title">{{ item.name }}</span>
        </el-menu-item>
      </el-menu>
    </nav>
    <main>
      <header>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item>管理平台</el-breadcrumb-item>
          <el-breadcrumb-item>{{ tabName }}</el-breadcrumb-item>
        </el-breadcrumb>
      </header>
      <div class="management-content">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      routeData: [
        {
          name: "消息通知",
          path: "/management/notification",
          icon: "el-icon-bell",
        },
        {
          name: "数据发布",
          path: "/management/dataDissemination",
          icon: "el-icon-s-promotion",
        },
        {
          name: "报告导出",
          path: "/management/exportReport",
          icon: "el-icon-upload",
        },
      ],
      tabName: "",
      routingPath: "",
    };
  },
  methods: {
    jumpTo(key, keyPath) {
      this.routingPath = key;
      this.$router.push({
        path: key,
      });
      this.currentTab();
    },
    currentTab() {
      for (let i in this.routeData) {
        if (this.routeData[i].path === this.routingPath)
          this.tabName = this.routeData[i].name;
        // break;
      }
    },
  },
  created() {
    this.routingPath = window.location.pathname;
    this.currentTab();
  },
};
</script>

<style lang="scss" scoped>
.management-box {
  width: 100%;
  height: 100%;
  display: flex;
  > nav {
    width: 200px;
    background: #000;

    .logo-box {
      height: 100px;
      color: #fff;
      cursor: pointer;
      font-size: 20px;
      align-items: center;
      justify-content: center;
      display: flex;
    }
    .el-menu {
      border: none;
    }
  }
  > main {
    width: calc(100% - 200px);
    background: #f0f2f5;
    > header {
      height: 50px;
      box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
      background: #fff;
      display: flex;
      align-items: center;
      padding: 0 10px;
    }
    .management-content {
      height: calc(100% - 70px);
      box-sizing: border-box;
      margin: 10px;
      box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
      background: #fff;
    }
  }
}
</style>
