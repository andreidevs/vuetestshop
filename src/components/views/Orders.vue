<template>
  <div>

      <OrderList
        v-bind:orders="Orders"
        @remove-order="removeOrder"

      />



    <AddOrder
      @add-order="addOrder"
    />
  </div>

</template>

<script>
    import OrderList from "@/components/OrderList"
    import AddOrder from "@/components/AddOrder"



    export default {
        components:{
            OrderList, AddOrder
        },
        data () {
            return{
                Orders:[
                    {id:187, date:new Date(2019,0,1), title: 'Заказ 1', desc:'Описание 1 ', name_product:'Продукт1', name:'Клиент 1'},
                    {id:478, date:Date.now(), title: 'Заказ 2', desc:'Описание 2 ', name_product:'Продукт2', name:'Клиент 2'},
                    {id:97, date:Date.now(), title: 'Заказ 3', desc:'Описание 3 ', name_product:'Продукт3', name:'Клиент 3'},

                ]
            }
        },
        methods:{
            removeOrder(id){
                this.Orders=this.Orders.filter(item => item.id !== id)
            },
            addOrder(order){
                this.Orders.push(order);
            }

        }

    }
</script>

<style scoped>
  select {
    width: 20%;
  }
  input{
    width: 20%;
  }


</style>

