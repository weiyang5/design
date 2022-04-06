<template>
  <el-table
      :data="tableData"
      border
      @selection-change="handleSelectionChange"
      :cell-style="{height:'40px',padding:'0px'}"
      :header-cell-style="{background:'#f2f2f2',height:'40px',padding:'0px'}"
      style="width: 100%">
    <el-table-column
        type="selection"
        width="50"
    >

    </el-table-column>
    <el-table-column
        prop="id"
        label="ID"
        width="40">
    </el-table-column>
    <el-table-column
        prop="userName"
        label="用户名">
    </el-table-column>
    <el-table-column
        prop="name"
        label="姓名">
    </el-table-column>
    <el-table-column
        prop="loginTime"
        label="登录时间">
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "MyTable",
  props:{
    tableData:{
      type:Array,
    },
    tableCols:{
      type:Array,
    }
  },
  methods:{
    handleSelectionChange(){

    },
  },
}
</script>

<style scoped>

</style>