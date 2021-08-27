<template>
  <div id="Shopdetail">
  <logo-search></logo-search>
    <searchbody></searchbody>
    <bodyy></bodyy>
  </div>
</template>

<script>
export default {
  name: "Shopdetail",
  components:{
    logoSearch:() => import('../components/logoSearch'),
    Bodyy:() => import('@/components/Body'),
    Searchbody:() => import('@/components/Searchbody'),
  }
}
</script>

<style scoped>

</style>