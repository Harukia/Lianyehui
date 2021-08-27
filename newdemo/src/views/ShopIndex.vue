<template>
  <div id="ShopIndex">
    <logo-search></logo-search>
    <searchbody :type="type"></searchbody>
    <bodyy></bodyy>
  </div>
</template>

<script>
export default {
  name: "ShopIndex",
  props:[
      "input1"
  ],
  components: {
    logoSearch:() => import('../components/logoSearch'),
    Searchbody:() => import('@/components/Searchbody'),
    Bodyy:() => import('@/components/Body')
  }
}
</script>

<style scoped>

</style>