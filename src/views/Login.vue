<template>
  <div>
    <div class="login-header">
      <div class="login-main">
        <div class="system-title">
          毕业生就业平台
        </div>
      </div>
    </div>
    <div class="login-container">
      <div class="login-main">
        <div class="show"><img src="~@/assets/images/jmu.png"></div>
        <div class="box">
          <div class="title">系统登录</div>
          <el-form ref="loginForm" :model="form" :rules="rules">
            <el-form-item prop="account">
              <el-input v-model="form.account" class="login-user" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input type="password" v-model="form.password" class="login-pwd" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item>
              <el-select v-model="form.type" placeholder="请选择类型">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="login" class="login-btn" :loading="false">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data(){
    return {
      form:{
        account:'admin',
        password:'123456',
        type:0,
      },
      options:[{label:'管理员',value:0},{label:'企业',value:1},{label:'学生',value:2}],
      rules:{
        account:[{required:true,message:"用户名不能为空"}],
        password:[{required:true,message:"密码不能为空"}],
      }
    }
  },
  methods:{
    login(){

    }
  }
}
</script>

<style scoped>
.login-header{
  height: 20%;
  width: 100%;
  position: absolute;
  top: 0px;
}
.login-container{
  width: 100%;
  position: absolute;
  top: 10%;
  bottom: 10%;
  background-color: #129bbd;
}
.login-main{
  width: 1200px;
  height: 100%;
  margin: auto;
}
.system-title{
  font-size: 36px;
  margin-top: 1%;
  font-weight: bold;
  color: #666666;
}
.show{
  float: left;
  position: absolute;
  bottom: 0;
  left: 150px;
  top: 0;
  padding-top: 60px;
  width: 750px;
}
.show img{
  height: 100%;
  display: block;
  margin: 0 auto;
}

.box{
  width: 30%;
  padding: 20px 40px;
  float: right;
  background-color: #fff;
  border-radius: 5px;
  margin-top: 10%;
}
.box .title{
  font-size: 18px;
  margin-bottom: 20px;
}
.login-btn{
  width: 100%;
  background-color: #1AA094;
  border: 0px;
}
.login-btn:hover{
  width: 100%;
  background-color: #007B73;
  border: 0px;
}
.login-user >>> .el-input__inner{
  background: url('~@/assets/images/user.png') no-repeat center left;
  padding-left: 20px;
}
.login-pwd >>> .el-input__inner{
  background: url('~@/assets/images/password.png') no-repeat center left;
  padding-left: 20px;
}
.login-footer{
  position: absolute;
  bottom: 0px;
  height: 20%;
  width: 100%;
  text-align: center;
  color: #999999;
  padding-top: 20px;
  font-size: 14px;
  box-sizing: border-box;
  background-color: #F0F0EE;
}
</style>