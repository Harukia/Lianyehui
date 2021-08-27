import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //state就是共享的数据
  state: {
    user: {
      username:null,
      password:null,
      realName:null,
      id:null,
      avatar:null,
      address:null,
      accessToken:null,
      refreshToken:null,
    },
    shopCart:[],
  },
  //当我们直接调用store.state中的数据时, 会不可避免的产生数据安全的问题, 有时候出了错,我们根本不知道是谁修改了这个数据
  //所以, 我们应该使用get和set, 也就是getters和mutations+actions
  //state中的每一个对象都应该有对应的getter
  getters: {
    userInfo: state => {
      return state.user
    },
    username: state => {
      return state.user.username
    },
    password: state => {
      return state.user.password
    },
    realName: state => {
      return state.user.realName
    },
    id: state => {
      return state.user.id
    },
    avatar: state => {
      return state.user.avatar
    },
    address: state => {
      return state.user.address
    },
    accessToken: state => {
      return state.user.accessToken
    },
    refreshToken: state => {
      return state.user.refreshToken
    },
    shopCart: state => {
      return state.shopCart
    },
  },
  //更改store中的数据唯一的方式就是 提交 mutation
  //mutations里面写的是一个个修改数据的方法
  mutations: {
    //每个mutation中的第一参数都应该是state
    SET_USER_INFO(state,userInfo){
      state.user.user=userInfo
    },
    SET_USERNAME(state,username) {
      state.user.username = username
    },
    SET_PASSWORD(state,password) {
      state.user.password = password
    },
    SET_REAL_NAME(state,realName) {
      state.user.realName = realName
    },
    SET_ID(state,id) {
      state.user.id = id
    },
    SET_AVATAR(state,id) {
      state.user.id = id
    },

    SET_ADDRESS(state,address) {
      state.user.address = address
    },
    SET_ACCESS_TOKEN(state,accessToken) {
      state.user.accessToken = accessToken
    },
    SET_REFRESH_TOKEN(state,refreshToken) {
      state.user.refreshToken = refreshToken
    },
    SET_SHOP_CART(state,shopCart) {
      state.shopCart= shopCart
    },
  },
  //action里面写的是很多mutations的集合
  //比如用户登录之后,会从后台获得一个用户信息对象, 这个对象包括了用户名,id等基础信息, 和用户的姓名等拓展信息, 以及用户凭证等安全信息
  //这些信息需要每个都set进store中的user对象中, 但是每个信息的修改方法都已经在mustaions里写死了, 我们要做的其实是创建一个新的action,在其中提交多个mutation
  actions: {
    login({ commit }) {
      // eslint-disable-next-line no-unused-vars
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          let userInfo = {
            username : "lianlian",
            password : "zwh4shide",
            realName : "yehui",
            id: "1231412",
            avatar:"https://video.codeseeding.com/image/default/AE03865608444CB389BA0334CD67F1AC-6-2.jpg",
            address:["肇庆市肇庆学院主校区"],
            accessToken: "wu",
            refreshToken: "wu",
          }
          commit('SET_USERNAME', userInfo.username)
          commit('SET_PASSWORD', userInfo.password)
          commit('SET_REAL_NAME', userInfo.realName)
          commit('SET_ID', userInfo.id)
          commit('SET_AVATAR', userInfo.avatar)
          commit('SET_ADDRESS', userInfo.address)
          commit('SET_ACCESS_TOKEN', userInfo.accessToken)
          commit('SET_REFRESH_TOKEN', userInfo.refreshToken)
          let shopCart=[
            {
              name:'dota2',
              url:'https://gss3.bdstatic.com/84oSdTum2Q5BphGlnYG/timg?wapp&quality=80&size=b150_150&subsize=20480&cut_x=0&cut_w=0&cut_y=0&cut_h=0&sec=1369815402&srctrace&di=55293a43c693aae514984e6ae9877753&wh_rate=null&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fpic%2Fitem%2F0b7b02087bf40ad1b310bb105d2c11dfa8ecce49.jpg',
              price:'168.00',
              num:'1',
              checked:false
            },
            {
              name:'dota2',
              url:'https://img2.baidu.com/it/u=1490948731,2647715521&fm=26&fmt=auto&gp=0.jpg',
              price:'168.00',
              num:'1',
              checked:false
            },
            {
              name:'dota2',
              url:'https://img2.baidu.com/it/u=1490948731,2647715521&fm=26&fmt=auto&gp=0.jpg',
              price:'168.00',
              num:'1',
              checked:false
            }

          ]
          commit('SET_SHOP_CART',shopCart)
          resolve()
        },1300)
      })


    },
    logout({ commit }) {
      // eslint-disable-next-line no-unused-vars
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          commit('SET_USERNAME', '')
          commit('SET_PASSWORD', '')
          commit('SET_REAL_NAME', '')
          commit('SET_ID', '')
          commit('SET_AVATAR', '')
          commit('SET_ADDRESS', '')
          commit('SET_ACCESS_TOKEN', '')
          commit('SET_REFRESH_TOKEN', '')
          commit('SET_SHOP_CART','')
          resolve()
        },500)
      })
    }
  },
  modules: {
  }
})
