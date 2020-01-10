<template>
  <div>
<!--    <button class="button-outline"><router-link to="/add" >Добавить заказ</router-link> </button>-->
    <h2>Список всех заказов</h2>
    <hr>
    <ul>
      <li>
        <strong>#</strong>
        <span >Название заказа</span>
        <span>Описание заказа</span>
        <span>Имя пользователя</span>
        <span>Наименование продукта</span>
      </li>
      <OrderItem
        v-for="(order, i) of orders "
        v-bind:order="order"
        v-bind:index="i"
        v-on:remove-order="removeOrder"
      />
    </ul>
    <div>
      <h3>Фильтровать заказы</h3>
      <label>
        <span>Фильтровать по дате: </span>
        <select >
          <option value="Cегодня">Cегодня</option>
          <option value="Последняя неделя">Последняя неделя</option>
          <option value="Последний месяц">Последний месяц</option>
        </select>
      </label>
      <label>
        <span>Введите пользователя или продукт: </span>
        <input type="text" placeholder="Продукт 1"  autofocus>
      </label>
    </div>
  </div>
</template>

<script>
  import OrderItem from "@/components/OrderItem";
  export default {
      name:'OrderList',
      components:{
          OrderItem
      },
      props:['orders'],
      methods:{
removeOrder(id){
this.$emit('remove-order',id);
}

      }
  }
</script>

<style scoped>
ul{
  display: flex;
  flex-direction: column;
justify-content: space-around;
  align-items: flex-start;
  align-content: flex-start;
}
  div{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  li{
    list-style-type: none;
  }
</style>



