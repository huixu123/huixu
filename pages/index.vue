<template>
  <div>
    <h1>这是首页</h1>
    <el-button><nuxt-link to="">登录</nuxt-link></el-button>
    <el-button><nuxt-link to="/auth/register">注册</nuxt-link></el-button>
    
  </div>   
</template>
  <script>
  import { Button, Input, Icon,Notification } from 'element-ui'
  import axios from 'axios'
  export default {
    component: {
      Button
    }
  }
  </script>
  <style>
  </style>
  