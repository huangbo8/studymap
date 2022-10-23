<template>
  <div class="root-box">
    <div class="condition">
      <div class="select-box">
        <el-input
          size="small"
          placeholder="请输入线路"
          v-model="input"
          clearable
        >
        </el-input>
        <el-input
          size="small"
          placeholder="请输入杆塔"
          v-model="input"
          clearable
        >
        </el-input>
      </div>
      <div class="button-box">
        <el-button size="small" plain>
          <i class="el-icon-refresh"></i> 重置</el-button
        >
        <el-button size="small" plain>
          <i class="el-icon-search"></i> 查询</el-button
        >
      </div>
    </div>

    <div class="table-box">
      <el-table
        @row-click="rowClick"
        height="100%"
        :data="tableData"
        stripe
        :header-cell-style="{
          background: '#F5F5F5',
          color: '#000',
        }"
      >
        <el-table-column align="center" prop="date" label="杆塔号">
        </el-table-column>
        <el-table-column align="center" prop="name" label="线路名称">
        </el-table-column>
        <el-table-column align="center" label="操作">
          <template v-slot="scope">
            <img
              @click="$emit('imageInfo', scope.row)"
              class="striograph"
              src="@/assets/imgs/imgtest.webp"
              alt=""
            />
            <i class="el-icon-view examine" @click="handleClick(scope.row)"></i>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <div class="pagination-box">
      <el-pagination
        small
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :pager-count="5"
        :page-size="20"
        layout="prev, pager, next,total"
        :total="10000"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { color } from "echarts";

export default {
  //   components: { LayerTools },
  data() {
    return {
      input: "",
      tableData: [
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
      currentPage: 1,
    };
  },
  methods: {
    handleClick(row) {},
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    rowClick(row) {},
  },
  async mounted() {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/filterBox.scss";
.striograph {
  width: 25px;
  height: 25px;
  vertical-align: bottom;
  margin-right: 5px;
}
</style>
