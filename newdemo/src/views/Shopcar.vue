<template>
    <div id="Shopcar">
        <logo-search></logo-search>
        <shop-car></shop-car>
    </div>
</template>

<script>
export default {
name: "Shopcar",
  components:{
    LogoSearch: () => import('../components/logoSearch'),
    ShopCar: () => import('../components/shopcar')
  }
}
</script>

<style scoped>

</style>