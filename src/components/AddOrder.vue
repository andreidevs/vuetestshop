<template>
  <div>
<!--    <button class="button-outline">-->
<!--      <router-link to="/" >Просмотр заказов</router-link> </button>-->
    <h2>Добавление нового заказа</h2>
    <form @submit.prevent="onSubmit">
      <input type="text" placeholder="Название заказа" v-model="title">
      <input type="text" placeholder="Описание заказа" v-model="desc">
      <input type="text" placeholder="Имя пользователя" v-model="name">
      <input type="text" placeholder="Наименование продукта" v-model="name_product">
      <button type="submit">Добавить</button>
    </form>
  </div>

</template>

<script>
  export default {
      data(){
          return{
              title:'',
              desc:'',
              name:'',
              name_product:''

          }
      },
    methods:{
        onSubmit(){
            if(this.title.trim()){
            const newOrder = {
                id:Math.floor(Math.random()),
                title:this.title,
                desc:this.desc,
                name:this.name,
                name_product: this.name_product
                };

              this.$emit('add-order', newOrder);

              this.title='';
              this.desc='';
              this.name ='';
              this.name_product ='';
            }

        }
    }
  }
</script>

