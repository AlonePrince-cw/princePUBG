<template>
<div id="pubg">
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" id="demo-ruleForms">
<h1 class="title"><i class="el-icon-user-solid"></i>PUBG管理系统</h1>
  <el-form-item label="账号" prop="username" label-width="60px">
    <el-input v-model="ruleForm.username" type="username"></el-input>
  </el-form-item>
    <el-form-item label="密码" prop="password" label-width="60px">
    <el-input v-model="ruleForm.password" type="password"></el-input>
  </el-form-item>
  
  <el-form-item class="marginLeft">
    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
    <el-button @click="resetForm(ruleForm)">重置</el-button>
  </el-form-item>
</el-form>
        </div>
</template>

<script>
  export default {
      name:'loginindex',
    data() {
      return {
        ruleForm: {
         username: '',
         password:'',
        },
        rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 3, max: 18, message: '长度在 3 到 18 个字符', trigger: 'blur' }
          ]
          
        }
      };
    },
    methods: {
      submitForm(ruleForm) {
            this.$refs[ruleForm].validate((valid) => {
          if (valid) {
            // console.log(this.ruleForm.username,this.ruleForm.password)
              // 可以在这里打印看看哟有没有axios
              // console.log(this.axios)
            let _this = this
            this.axios.post('http://ht.dsgj1668.com/api/users/login',{
                username:_this.ruleForm.username,
                password:_this.ruleForm.password,
            })
            .then(response =>{
              console.log("我是来自返回的数据",response.data)
              // if(response.code === 1){
              //   this.$router.push({path: '/main'})
              // }
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(){
        this.ruleForm = {
          username:'',
          password:'',
        }
      },
    },

  }
</script>

<style lang="scss" scoped>
     html,body, #pubg{
        height: 100%;
        width: 100%;
    }
    #pubg{
      background-image:url('../../assets/2.jpg');
      background-repeat:no-repeat;
       display:flex;
       justify-content:center;
       align-items: center;
    }
    #demo-ruleForms {
      margin-top:150px;
       border:1px solid #ccc;
      border-radius:4px ;
      padding:0px 20px 10px 10px;
      .title{
        font-size:18px;
        padding:20px 0px 0px 76px;
      }
     .marginLeft{
       margin-left:-30px;
     }
    }
</style>