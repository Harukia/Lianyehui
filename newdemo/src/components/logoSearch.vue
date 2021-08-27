<template>
    <div id="logoSearch" >
      <el-card style="height: 150px" >
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal"  style="text-align: center;height: 200px">
          <el-menu-item @select="navigate"><img src="../img/img_1.png" class="logo" /></el-menu-item>
          <el-menu-item style="padding-top: 50px;padding-left: 200px;padding-right: 100px">
            <el-autocomplete
                v-model="searchInput"
                :fetch-suggestions="querySearchAsync"
                placeholder="请输入内容"
                @select="handleSelect"
                style="width: 500px"
                prefix-icon="el-icon-search"
                @blur="search"
                @keyup.enter.native="search"
            ></el-autocomplete>
          </el-menu-item>
          <el-menu-item index="3" style="padding-top: 50px" v-if="!loginvisiable"  @click="drawer = true">个人中心</el-menu-item>
          <el-menu-item index="4"  style="padding-top: 50px" v-if="loginvisiable" @click="dialogVisible = true">登录</el-menu-item>
        </el-menu>
      </el-card>

      <el-dialog title="登录" :visible.sync="dialogVisible" width="30%">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="账号">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="form.password"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="login">确 定</el-button>
      </span>
      </el-dialog>


      <!--      <el-card >-->
      <el-menu :default-active="activeIndex"  mode="horizontal"  router @select="console.log('select menu')">
        <el-menu-item index="/" style="padding-right: 100px" >全部分类</el-menu-item>
        <el-menu-item index="/phone" style="padding-right: 100px"  :route.prop="input1">手机</el-menu-item>
        <el-menu-item index="3" style="padding-right: 100px">美妆馆</el-menu-item>
        <el-menu-item index="4" style="padding-right: 100px">超市</el-menu-item>
        <el-menu-item index="5" style="padding-right: 100px">生鲜</el-menu-item>
        <el-menu-item index="6" style="padding-right: 100px">京东国际</el-menu-item>
        <el-menu-item index="7" style="padding-right: 100px">闪购</el-menu-item>
        <el-menu-item index="8" style="padding-right: 100px">拍卖</el-menu-item>
        <el-menu-item index="9">金融</el-menu-item>
      </el-menu>
<!--      -->
      <el-drawer
          :visible.sync="drawer"
          direction="rtl"
          size="20%"
          :show-close="false">
        <div class="avatar center">
          <el-avatar shape="square" :size="70" :src="userInfo.avatar"></el-avatar>
        </div>
        <div class="username center top50">
          <span>{{userInfo.username}}</span>
        </div>
        <div class="main center top50">
          <el-menu :default-active="userActiveIndex" class="el-menu-vertical-demo" mode="vertical">
            <el-menu-item index="1">个人资料</el-menu-item>
            <el-menu-item class="top10" index="2">我的订单</el-menu-item>
            <el-menu-item class="top10" index="3" @click="toShopcar()">我的购物车</el-menu-item>
            <el-menu-item class="top10" index="4">我的收藏</el-menu-item>
            <el-menu-item class="top10" index="5">浏览历史</el-menu-item>
            <el-menu-item class="top10" index="6" @click="exitlogin()">注销</el-menu-item>
          </el-menu>
        </div>
      </el-drawer>
      <!--      </el-card>-->
  </div>
</template>

<script>
export default {
  name: "logoSearch",
  computed:{
    userInfo(){
      return this.$store.getters.userInfo
    }
  },
  data() {
    return {
      input1: '手机',
      input2: '',
      input3: '',
      select: '',
      activeIndex:'1',
      drawer: false,
      user: {
        avatar: "https://video.codeseeding.com/image/default/AE03865608444CB389BA0334CD67F1AC-6-2.jpg",
        username: "Cara"
      },
      restaurants: [],
      searchInput: '',
      timeout:  null,
      loginvisiable: true,
      dialogVisible:false,
      form: {
          username:'',
          password:''
      }

    }
  },
  methods:{

    Search(){
      console.log(this.input3)
      this.$router.push({path: '/about', query:{keyword: this.input3}}  );
    },
    navigate() {
      this.$router.push({path: '/'})
    },
    exitlogin(){
      this.drawer = false
      this.userInfo1 = true
    },
    toShopcar(){
      this.$router.push({path: '/shopping'})
    },
    login() {
      this.$store.dispatch('login')
      this.dialogVisible = false
      this.drawer = false
      this.loginvisiable = false
    }
  }
}
</script>

<style scoped>
.logo{
  width: 250px;
  height: 150px;
}



.hotwords{
   float: left;
   padding-left: 95px;
   width: 384px;
   height: 20px;
   line-height: 20px;
   overflow: hidden;
  color:darkgray;
}

.fore{
  text-decoration: none;
  white-space: nowrap;
}

</style>