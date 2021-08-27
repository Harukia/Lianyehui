<template>
  <div class="about">
    <logo-search></logo-search>
    <searchbody></searchbody>
    <div v-for="good in goods" :key="good.name">
      <el-card class="phone" style="float: left;padding-right: 30px"  v-if="good.visitable">
        <img src="../assets/phone/img_3.png" @click="sea()">
        <div style="text-align: center">{{ good.name }}</div>
        <div>{{value}}</div>
      </el-card>
    </div>
  </div>
</template>


<script>
export default {
  name: "Shopdetail",
  data(){
    return{
      key:this.$route.query.keyword,
      keyvalue:"",
      goods:[
        {name: '华为V10', value: '2499.00', src: '../img/phone/img_3.png', type: '华为' ,visitable: true},
        {name: '荣耀X20', value: '3098.00', src: '../img/phone/img_1.png', type: '华为' ,visitable: true},
        {name: '苹果10', value: '2499.00', src: '../img/phone/img_2.png', type: 'apple' ,visitable: true},
        {name: '苹果50', value: '3098.00', src: '../img/phone/img_3.png', type: 'apple',visitable: true},
      ],
    }
  },
  components:{
    logoSearch:() => import('../components/logoSearch'),
    Searchbody:() => import('@/components/Searchbody'),
  },
  mounted :function(){
    this.sea();
  },
  created:function () {
    this.freshi1();
  },
  methods:{
    freshi1(){
      for(let i = 0; i <= this.goods.length; i++){
        this.goods[i].visitable = true
      }
    },
    sea(){
      for(let i = 0; i <= this.goods.length; i++){
         var value = this.goods[i].name
          if(value.indexOf(this.key)){
            this.goods[i].visitable = false
          }
      }
    }
  }
}
</script>