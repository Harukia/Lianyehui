<template>
  <el-card >
    <div id="Searchbody" style="text-align: left;padding-left: 0px">
      <div>
        <el-form>
          <el-card style="height: 60px">
            <el-breadcrumb separator="/">
              <el-breadcrumb-item :to="{ path: '/' }">全部分类</el-breadcrumb-item>
              <el-breadcrumb-item :to="{path:'/phone'}">手机</el-breadcrumb-item>
            </el-breadcrumb>
          </el-card>

          <el-card style="height: 80px">
            分类：
<!--          <el-form-item label="分类：" prop="name">-->
            <el-tag
                v-for="tag in phone"
                :key="tag.name"
                :type="tag.type"
                class="tag"
                @click="AddTag(tag.name,tag.type)">
              {{tag.name}}
            </el-tag>
<!--          </el-form-item>-->
          </el-card>

            <el-card style="height: 80px">
          <el-form-item label="CPU型号：" prop="name">
            <el-tag
                v-for="tag in CPU"
                :key="tag.name"
                :type="tag.type"
                class="tag"
                @click="AddTag(tag.name,tag.type)">
              {{tag.name}}
            </el-tag>
          </el-form-item>
            </el-card>

          <el-card style="height: 80px">
          <el-form-item label="机身存储：" prop="name">
            <el-tag
                v-for="tag in MRY"
                :key="tag.name"
                :type="tag.type"
                class="tag"
                @click="AddTag(tag.name,tag.type)">
              {{tag.name}}
            </el-tag>
          </el-form-item>
          </el-card>
          <el-card style="height: 80px">
        <div >
          高级选项：
            <el-select v-model="MRY1" placeholder="内存" style="width: 100px;height: 50px;padding-right: 40px">
            <el-option
                v-for="item in MRY"
                :key="item.name"
                :label="item.name"
                :value="item.name">
            </el-option>
          </el-select>
            <el-select v-model="SIZE1" placeholder="尺寸" style="width: 100px;height: 50px;padding-right: 40px">
              <el-option
                  v-for="item in SIZE"
                  :key="item.name"
                  :label="item.name"
                  :value="item.name">
              </el-option>
            </el-select>
            <el-select v-model="HOTWORD1" placeholder="热点" style="width: 100px;height: 50px;padding-right: 40px">
              <el-option
                  v-for="item in HOTWORD"
                  :key="item.name"
                  :label="item.name"
                  :value="item.name">
              </el-option>
            </el-select>
            <el-select v-model="CAP1" placeholder="容量" style="width: 100px;height: 50px;padding-right: 40px">
              <el-option
                  v-for="item in CAP"
                  :key="item.name"
                  :label="item.name"
                  :value="item.name">
              </el-option>
            </el-select>
            <el-select v-model="SYS1" placeholder="系统" style="width: 100px;height: 50px;padding-right: 40px">
              <el-option
                  v-for="item in SYS"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
        </div>
          </el-card>
          <el-card style="float: left" v-if="dynamicTags.length!= 0">
            <el-row>
            <span>已选择标签：</span>
            <el-tag closable v-for="tag in dynamicTags" :key="tag.item"  style="background: white;border-color: white;padding-right: 40px" @close="deleteTag(tag)">
              {{tag}}
            </el-tag>
            </el-row>
          </el-card>
        </el-form>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
name: "Searchbody",
  props:[
      "type"
  ],
  data() {
    return {
      options: [{
        value: '选项1',
        label: '手机'
      }, {
        value: '选项2',
        label: '1'
      }, {
        value: '选项3',
        label: '2'
      }, {
        value: '选项4',
        label: '3'
      }, {
        value: '选项5',
        label: '4'
      }],
      value: '',
      activeIndex:'1',
      tags:[
        {name:''}
      ],
      phone:[
        {name: '苹果', type: 'SYS'},
        {name: '华为', type: 'SYS'},
        {name: '荣耀', type: 'SYS'},
        {name: 'vivo', type: 'SYS'},
        {name: 'oppo', type: 'SYS'},
        {name: '黑鲨', type: 'SYS'},
        {name: '一加', type: 'SYS'},
        {name: '三星', type: 'SYS'},
        {name: '魅族', type: 'SYS'},
        {name: '摩托罗拉', type: 'SYS'},
        {name: '中兴', type: 'SYS'},
        {name: '联想', type: 'SYS'},
        {name: 'ROG', type: 'SYS'},

      ],
      CPU:[
        {name: '骁龙855', type: 'CPU'},
        {name: 'i-3', type: 'CPU'},
        {name: 'i-4', type: 'CPU'},
        {name: '鸿蒙OS2', type: 'CPU'},
        {name: '骁龙845', type: 'CPU'},
        {name: '骁龙835', type: 'CPU'},
        {name: '骁龙85', type: 'CPU'},
        {name: '骁龙815', type: 'CPU'},
        {name: 'EMUI11.0', type: 'CPU'},
      ],
      MRY:[
        {name: '16G', type: 'MRY'},
        {name: '32G', type: 'MRY'},
        {name: '64G', type: 'MRY'},
        {name: '128G', type: 'MRY'},
        {name: '256G', type: 'MRY'},
      ],
      SYS:[{
        value: '苹果',
        label: '苹果'
      }, {
        value: '安卓',
        label: '安卓'
      }, {
        value: '其他',
        label: '其他'
      }],
      CAP:[
        {name: '32G', type: ''},
        {name: '64G', type: ''},
        {name: '128G', type: ''},
      ],
      SIZE:[
        {name: '16寸', type: ''},
        {name: '20寸', type: ''},
        {name: '32寸', type: ''},
      ],
      HOTWORD:[
        {name: '人工智能', type: ''},
        {name: '人脸识别', type: ''},
        {name: '语音交流', type: ''},
      ],
      SYS1:'',
      CAP1:'',
      MRY1:'',
      SIZE1:'',
      HOTWORD1:'',
      dynamicTags: [],
      dynamicTagstype:[],
      dynamicMRY:[],
      dynamicSYS:[],
      dynamicCPU:[]
    }
  },
  methods:{
      AddTag(tag,type){
        const a= this.dynamicTagstype.indexOf(type)
        if(a < 0 ){
          this.dynamicTagstype.push(type)
          this.dynamicTags.push(tag)
        }
        else{
          switch (type){
            case 'MRY' :
              // eslint-disable-next-line no-case-declarations
                const b = this.dynamicTagstype.indexOf(type)
                  if(b > -1){  //如果已经存在类型相同的标签
                    var mry = this.dynamicMRY
                    this.dynamicTags.splice(this.dynamicTags.indexOf(mry),1)
                    this.dynamicMRY.splice(this.dynamicMRY.indexOf(mry),1)
                    this.dynamicMRY.push(tag)
                    this.dynamicTags.push(tag)
                  }
                  else{
                    this.dynamicTagstype.push(type)
                    this.dynamicTags.push(tag)
                    this.dynamicMRY.push(tag)
                  }
                  break

            case 'SYS':
              // eslint-disable-next-line no-case-declarations
              const c = this.dynamicTagstype.indexOf(type)
              if(c > -1){  //如果已经存在类型相同的标签
                var SYStag = this.dynamicSYS
                this.dynamicTags.splice(this.dynamicTags.indexOf(SYStag),1)
                this.dynamicSYS.splice(this.dynamicSYS.indexOf(SYStag),1)
                this.dynamicSYS.push(tag)
                this.dynamicTags.push(tag)
              }
              else{
                this.dynamicTagstype.push(type)
                this.dynamicTags.push(tag)
                this.dynamicSYS.push(tag)
              }
              break

            case 'CPU':
              // eslint-disable-next-line no-case-declarations
              const d = this.dynamicTagstype.indexOf(type)
              if(d > -1){  //如果已经存在类型相同的标签
                var cut = this.dynamicCPU
                this.dynamicTags.splice(this.dynamicTags.indexOf(cut),1)
                this.dynamicCPU.splice(this.dynamicCPU.indexOf(cut),1)
                this.dynamicCPU.push(tag)
                this.dynamicTags.push(tag)
              }
              else{
                this.dynamicTagstype.push(type)
                this.dynamicTags.push(tag)
                this.dynamicCPU.push(tag)
              }
              break

          }
        }
        // if (tag,type) {
        //   this.dynamicTags.push(tag,type);
        // }
        // console.log(type)
    },
    deleteTag(tag){
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag),1);
    },
    navigate(key){
      switch (key) {
        case"1":
          this.$router.push({path:'/about'})
              break
        case"2":
          this.$router.push({path:'/'})
              break
      }
    },
    qwe(){
        this.$router.push({path:'/'})
    }
  },
  mounted() {
  console.log(this.type)
  }
}
</script>

<style scoped>
.tag{
  padding-right: 10px;background: white;border-color: white;padding-right: 40px
}
</style>