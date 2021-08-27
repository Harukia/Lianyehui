<template>
    <div id="shopcar">
      <el-card>
        <el-row >
          <div ><span style="float: left">全部商品</span></div>
          <div style="float: right">
            <span >配送至：</span>
            <el-select >

            </el-select>
          </div>
        </el-row>
        <el-card>
      <el-row>
        <el-col :span="2"><el-checkbox v-model="allcheck">全选</el-checkbox></el-col>
        <el-col :span="10"><span>商品</span></el-col>
        <el-col :span="1"><span>单价</span></el-col>
        <el-col :span="4"><span>数量</span></el-col>
        <el-col :span="2"><span>小计</span></el-col>
        <el-col :span="5"><span>操作</span></el-col>
      </el-row>
        </el-card>
      </el-card>
        <el-card>
          <el-row v-for="(item,index) in Shopcar" :key="index" >
            <el-col :span="2"><el-checkbox v-model="item.checked"></el-checkbox></el-col>
            <el-col :span="1"><el-image :src="item.url"></el-image></el-col>
              <el-col :span="8"><span>{{item.name}}</span></el-col>
              <el-col :span="3"><span>{{item.price}}</span></el-col>
            <el-col :span="1"><el-input-number v-model="item.num" :min="1" label="数量" size="mini"></el-input-number></el-col>
            <el-col :span="6"><span >{{item.price * item.num}}</span></el-col>
            <el-col :span="1"><el-button size="mini" @click="del(index)">delete</el-button></el-col>
          </el-row>
        </el-card>


      <el-card >
          <el-row >
            <el-col :span="2"><el-checkbox  v-model="allcheck">全选</el-checkbox></el-col>
            <el-col :span="2"><el-button @click="alldelete()">删除</el-button></el-col>
            <el-col :span="2"><el-button>关注</el-button></el-col>
            <el-col :span="4"><span>已选择：{{totalNum}}</span></el-col>
            <el-col :span="2"><span>总价：{{totalPrice}}</span></el-col>
            <el-col :span="4"><el-button @click="consolo()">结算</el-button></el-col>
          </el-row>
      </el-card>
    </div>
</template>

<script>
export default {
name: "shopcar",
  data(){
  return{
    allcheck:'',
    perPrice:''
  }
  },
  watch: {
    allcheck(){
      this.Shopcar.forEach((item) =>{
          item.checked = !item.checked
      })
    }
  },

  methods:{
    del(item){
      this.Shopcar.splice(item,1)
    },
    alldelete(){
      //使用[...this.Shopcar]而不使用this.ShopCar，因为这是每次循环后这个数组都会变化，如果只使用this每次都是这个数组
      [...this.Shopcar].forEach((item) => {
        if(item.checked){
          this.Shopcar.splice(this.Shopcar.indexOf(item),1)
        }
      })
    },
  },
  computed:{
    totalNum(){
      let totalNum = 0
      this.Shopcar.forEach((item) => {
        if(item.checked)
          totalNum ++
      })
      return totalNum
    },

    totalPrice(){
      let totalPrice = 0
      this.Shopcar.forEach((item) => {
        if(item.checked) totalPrice += item.price*item.num
      })
      return totalPrice
    },

    Shopcar(){
      return this.$store.getters.shopCart
    }
  }
}
</script>

<style scoped>

</style>