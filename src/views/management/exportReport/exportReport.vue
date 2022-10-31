<template>
  <div class="content-box">
    <el-table
      height="calc(100% - 40px)"
      :data="tableData"
      stripe
      :header-cell-style="{ background: '#f8f9fb' }"
    >
      <el-table-column align="center" prop="date" label="报告名称">
      </el-table-column>
      <el-table-column align="center" prop="name" label="发布日期">
      </el-table-column>

      <el-table-column align="center" label="操作">
        <template v-slot="scope">
          <el-button @click="derive(scope.row)" type="text" slot="reference"
            >导出</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <div class="page-box">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage2"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="sizes, prev, pager, next"
        :total="1000"
      >
      </el-pagination>
    </div>

    <!-- 发布组件 -->
    <!-- <FillIn ref="fillIn"></FillIn> -->
  </div>
</template>

<script>
// import FillIn from "./components/fillIn.vue";
export default {
  components: {
    // FillIn,
  },
  data() {
    return {
      formInline: {
        user: "",
        time: "",
        region: "",
      },
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎11",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
      currentPage2: 1,
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    derive(row) {},
  },
};
</script>

<style lang="scss" scoped>
.content-box {
  padding: 10px 20px;
  box-sizing: border-box;
  height: 100%;

  .page-box {
    display: flex;
    align-items: center;
    height: 50px;
    justify-content: flex-end;
  }
}
</style>
