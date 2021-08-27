<template>
    <div id="ShopFirst">
        <logo-search></logo-search>
      <index-content></index-content>
    </div>
</template>

<script>
export default {
name: "ShopFirst",
  components:{
    logoSearch:() => import('../components/logoSearch'),
    indexContent:() => import('../components/indexContent')
  }
}
</script>

<style scoped>

</style>