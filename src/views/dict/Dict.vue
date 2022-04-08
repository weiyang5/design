<template>
  <div style="background-color: #f2f2f2">
    <el-row :gutter="20">
      <el-col :span="4">
        <el-card class="el-card">
          <ul class="type">
            <li @click="handleType(index,item.id)" :class="active==index?'active':''" v-for="(item,index) in typeTableData" :key="index">
              {{item.name}}
            </li>
          </ul>
        </el-card>
      </el-col>
      <el-col :span="20">
        <el-card class="el-card">
          <div class="btn-style">
            <el-button size="small" type="primary" @click="create" round>新增</el-button>
            <el-button size="small" type="primary" @click="update" round>修改</el-button>
            <el-button size="small" type="warning" @click="del" round>删除</el-button>
          </div>
          <my-table ref="mutipleTable" :tableData="dictTableData" :tableCols="dictTableCols" >
            <template slot="slot_status" slot-scope="scope">
              <el-tag v-if="scope.data.status==0" type="success" size="mini" >正常</el-tag>
              <el-tag v-else type="danger" size="mini" >停用</el-tag>
            </template>
          </my-table>
        </el-card>
        <Add v-if="add.visible" :param="add" :type-id="selectTypeId"></Add>
        <Edit v-if="edit.visible" :param="edit" :typeId="selectTypeId"></Edit>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import {type_query} from "@/api/dict";
import {dict_query} from "@/api/dict";
import {del} from "@/api/dict";
import {message} from "@/utils/message";
import MyTable from "@/components/MyTable";
import Add from "@/views/dict/Add";
import Edit from "@/views/dict/Edit";
export default {
  name: "Dict",
  components: {Add, MyTable,Edit},
  data(){
    return{
      typeTableData:[],
      typeTableCols:[
          {prop:'name',label:'类型名称'},
      ],
      active:0,
      selectTypeId:0,
      dictTableData:[],
      dictTableCols:[
        {prop:'dictKey', label:'字典名称'},
        {prop:'dictVal', label:'字典值'},
        {prop:'status', label:'状态',slot:'slot_status'},
        {prop:'sort', label:'序号',width:'100'},
      ],
      add:{
        visible:false,
        close:this.close,
        callback:this.reload,
      },
      edit:{
        visible:false,
        close:this.close,
        callback:this.reload,
        form:null,
      }
    }
  },
  mounted() {
    type_query({}).then(res=>{
      this.typeTableData = res.data;
      this.selectTypeId = this.typeTableData[0].id;
    })
    this.list({typeId:this.selectTypeId})
  },
  methods:{
    create(){
      this.add.visible = true;
    },
    update(){
      let selection = this.$refs['mutipleTable'].selection;
      if(selection.length==1){
        this.edit.visible = true;
        this.edit.form = selection[0]
      }else{
        message.warning('请选择一条数据修改')
      }
    },
    reload(){
      this.list({typeId:this.selectTypeId});
    },
    list(param){
      dict_query(param).then(res=>{
        this.dictTableData = res.data;
      })
    },
    close(){
      this.add.visible=false
      this.edit.visible=false
    },
    del(){
      let selection = this.$refs['mutipleTable'].selection;
      if(selection.length>0){
        this.$confirm('确定要删除吗','删除提示').then(()=>{
          let arr = selection.map(item=>item.id);
          let ids = arr.join(',');
          del(ids).then(res=>{
            message.success(res.msg);
            this.reload()
          })
        }).catch(()=>{})
      }else{
        message.warning('请选择要删除的数据')
      }
    },
    handleType(index,typeId){
      this.active = index
      this.selectTypeId = typeId
      this.list({typeId:typeId})
    }
  }
}
</script>

<style scoped>
.type{
  list-style: none;
  margin: 0px;
  padding: 0px;
}
.type li{
  height: 40px;
  padding-left: 20px;
  line-height: 40px;
  box-sizing: border-box;
  cursor: pointer;
  font-size: 14px;
}
.type .active{
  background-color: #1AA094;
  color: #ffffff;
  border-radius: 10px;
}
</style>