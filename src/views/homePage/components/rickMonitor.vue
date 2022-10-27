<template>
  <div class="content-box">
    <div class="table-box">
      <el-table
        height="100%"
        :data="tableData"
        stripe
        :header-cell-style="{
          background: '#060b62',
          color: '#8282c1',
          border: 'none',
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
        :page-size="20"
        layout="prev, pager, next"
        :total="10000"
      >
      </el-pagination>
    </div>
  </div>
</template>
    
    <script>
import { getAllAndroidPlugins, getList } from "@/api/qinqiu";

export default {
  components: {},
  data() {
    return {
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
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
  async mounted() {},
};
</script>
    
    <style lang="scss" scoped>
.content-box {
  height: 100%;
  .table-box {
    height: calc(100% - 44px);
    margin-bottom: 10px;
    ::v-deep {
      .el-table__row {
        background-color: rgba(0, 0, 0, 0);
        color: #cfd0d9;
        font-weight: 400;
        td {
          background-color: rgba(0, 0, 0, 0) !important;
        }
      }
      .el-table,
      .el-table--striped {
        background-color: rgba(0, 0, 0, 0);
      }
      .gutter {
        background-color: #060b62 !important;
      }
      .is-center {
        border: none !important;
      }
    }
  }

  .pagination-box {
    text-align: right;

    .el-pagination {
      padding: 0 !important;
      white-space: normal !important;
    }
  }
}
</style>
    