<template>
        <section class="container">
          <div class="register-cont">
            <span class="input-text">账号：</span>
            <el-input 
              v-model="account"
              class="register-input" 
              placeholder="请输入账号">
              <i slot="suffix" class="el-input__icon el-icon-edit"></i>
            </el-input>  
            <span 
              class="input-text">密码：</span>
            <el-input 
              v-model="passwd"
              class="register-input" 
              placeholder="请输入密码">
              <i slot="suffix" class="el-input__icon el-icon-edit"></i>        
            </el-input>
    
            <el-button class="register-btn" type="primary" @click="register" >马上登录</el-button>
          </div>
        </section>
      </template>
      <script>
      import { Button, Input, Icon,Notification } from 'element-ui'
      import axios from 'axios'
      export default {
        data () {
          return {
            passwd:'',
            account:''
          }
        },
        components: {
          Button,
          Input,
          Icon,
          Notification
        },
        methods: {
          register () {
    
            let queryData={
              passwd:this.passwd,
              account:this.account
            }
            axios.post('http://localhost:3000/users/login',queryData).then(res=>{
             if(res.data.code===0){
              Notification({
              title: '成功',
              message: res.data.msg,
              type: 'success'
            })
             }else {
              Notification({
              title: '失败',
              message: res.data.msg,
              type: 'error'
            })

             }
            })
    
          }
        },
      }
      </script>
     <style scoped lang='scss'>
      .register-cont {
        width: 500px;
        height: 300px;
        box-shadow: -3px 8px 30px rgb(190, 190, 190);
        border-radius: 20px;
        margin: 100px auto;
        padding: 50px;
        background: #EEE;
    
      }
      .register-cont .input-text {
        float: left;  
        width: 60px;
        line-height: 35px;
      }
      .register-cont .el-input {
        float: left;
        width: 330px;
        margin-bottom: 10px;
      }
      .register-btn {
        margin-top:30px;
        width: 100%;
      }
      </style>
      