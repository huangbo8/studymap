<template>
  <div class="content-box">
    <el-form
      size="small"
      :inline="true"
      :model="formInline"
      class="dissemination-form"
      ref="disseminationForm"
    >
      <el-form-item label="数据名称" prop="user">
        <el-input v-model="formInline.user" placeholder="数据名称"></el-input>
      </el-form-item>

      <el-form-item label="数据版本" prop="user">
        <el-date-picker
          v-model="formInline.time"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        >
        </el-date-picker>
      </el-form-item>

      <el-form-item label="数据类型" prop="user">
        <el-select v-model="formInline.region" placeholder="活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="状态" prop="user">
        <el-select v-model="formInline.region" placeholder="活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
        <el-button @click="resetForm">重置</el-button>
        <el-button type="primary" @click="fillInShow">发布</el-button>
      </el-form-item>
    </el-form>
    <el-table
      height="calc(100% - 80px)"
      :data="tableData"
      stripe
      :header-cell-style="{ background: '#f8f9fb' }"
    >
      <el-table-column align="center" prop="date" label="数据名称">
      </el-table-column>
      <el-table-column align="center" prop="name" label="数据类型">
      </el-table-column>
      <el-table-column align="center" prop="address" label="数据版本">
      </el-table-column>
      <el-table-column align="center" prop="address" label="状态">
      </el-table-column>
      <el-table-column align="center" prop="address" label="发布日期">
      </el-table-column>
      <el-table-column align="center" prop="address" label="发布日期">
      </el-table-column>

      <el-table-column align="center" label="操作">
        <template v-slot="scope">
          <el-popconfirm
            title="这是一段内容确定删除吗？"
            @confirm="confirm(scope.row)"
          >
            <el-button type="text" slot="reference">下架</el-button>
          </el-popconfirm>
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
    <FillIn ref="fillIn"></FillIn>
  </div>
</template>
    
<script>
import FillIn from "./components/fillIn.vue";
export default {
  components: {
    FillIn,
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
    onSubmit() {
      console.log("submit!");
    },
    resetForm() {
      this.$refs["disseminationForm"].resetFields();
    },
    confirm(row) {
      console.log("删除");
    },
    fillInShow() {
      this.$refs.fillIn.dialogVisible = true;
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
};
</script>
    
<style lang="scss" scoped>
.content-box {
  padding: 10px 20px;
  box-sizing: border-box;
  height: 100%;
  .dissemination-form {
    display: flex;
    align-items: center;
    height: 40px;
    .el-form-item {
      margin-bottom: 0 !important;
    }
  }

  .page-box {
    display: flex;
    align-items: center;
    height: 50px;
    justify-content: flex-end;
  }
}
</style>
  
    
    
    
    
    
    
    