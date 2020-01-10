<template>
  <li >
     <strong  class="list__item">{{ index + 1}}</strong>
      <span class="list__item">{{ order.title }}</span>
      <span class="list__item"> {{order.desc }}</span>
      <span class="list__item"> {{ order.name }}</span>
    <span class="list__item">{{ order.name_product }}</span>
      <button class="button" v-on:click="$emit('remove-order', order.id)">Удалить заказ</button>
  </li>

</template>

<script>
export default {
  props:{
    order:{
      type:Object,
      required:true
    },
      index:Number
  }
}
</script>

<style scoped>
    li{
      display: flex;
      justify-content: flex-start;
    }
  .list__item{
    min-width: 20%;
    width: 100%;
  }
</style>
