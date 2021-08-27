<template>
  <div id="Body" >
    <el-card style="float: left;width: 1800px">
      <el-row>
          <el-radio-group v-model="radio1" style="float: left;" size="mini" >
            <el-radio-button fill="	#409EFF" label="销量"></el-radio-button>
            <el-radio-button fill="	#409EFF" label="评论数"></el-radio-button>
            <el-radio-button fill="	#409EFF" label="新品"></el-radio-button>
            <el-radio-button fill="	#409EFF" disabled label="价格"></el-radio-button>
          </el-radio-group>
      </el-row>
    </el-card>
    <div v-for="good in goods" :key="good.name">
        <el-card class="phone" style="float: left;padding-right: 30px">
          <img src="../assets/phone/img_3.png">
          <div style="text-align: center">{{ good.name }}</div>
          <div>{{good.value}}</div>
        </el-card>

  </div>
  </div>
</template>

<script>
export default {
  name: "Body",
  props:[
      "value"
  ],
  data(){
    return{
      src:'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
      tags:[
        { name: '1'},
        { name: '1'},
        { name: '1'},
        { name: '1'},
      ],
      goods:[
        {name: '华为V10', value: '2499.00', src: '../img/phone/img_3.png', type: '华为' ,visitable: true},
        {name: '荣耀X20', value: '3098.00', src: '../img/phone/img_1.png', type: '华为' ,visitable: true},
        {name: '苹果10', value: '2499.00', src: '../img/phone/img_2.png', type: 'apple' ,visitable: true},
        {name: '苹果50', value: '3098.00', src: '../img/phone/img_3.png', type: 'apple',visitable: true},
      ],
      radio1:''
    }
  }
}
</script>

<style scoped>
.phone{
  height: 400px;
  width:400px;
}

.el-button{
    float: left;
}
</style>