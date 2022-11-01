<template>
  <div class="root-box">
    <div class="condition">
      <div class="select-box">
        <el-input size="small" placeholder="线路" v-model="input" clearable>
        </el-input>
        <el-input size="small" placeholder="杆塔" v-model="input" clearable>
        </el-input>
        <el-select
          size="small"
          v-model="input"
          clearable
          placeholder="风险等级"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div class="button-box">
        <el-button size="small" plain>
          <i class="el-icon-refresh"></i> 重置</el-button
        >

        <el-button size="small" plain>
          <i class="el-icon-search"></i> 查询</el-button
        >

        <el-button size="small" plain>
          <i class="el-icon-upload"></i> 导出</el-button
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
        <el-table-column align="center" prop="date" label="风险等级">
        </el-table-column>
        <el-table-column align="center" prop="date" label="杆塔号">
        </el-table-column>
        <el-table-column align="center" prop="name" label="线路名称">
        </el-table-column>
        <el-table-column align="center" prop="date" label="监测时间">
        </el-table-column>
        <el-table-column align="center" prop="date" label="状态">
        </el-table-column>
        <!-- <el-table-column align="center" label="操作">
          <template v-slot="scope">
            <i
              class="el-icon-upload examine"
              @click.stop="handleClick(scope.row)"
            ></i>
          </template>
        </el-table-column> -->
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
export default {
  //   components: { LayerTools },
  data() {
    return {
      input: "",
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
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
    rowClick(row) {
      this.$parent.tableDataLocation([28.12, 112.59]);
    },
  },
  async mounted() {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/filterBox.scss";
</style>
