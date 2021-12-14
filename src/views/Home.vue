<template>
  <div class="home">
    <h1>Welcome to Task App !</h1>
    <router-link to="/tasks">start</router-link>
    <h1>{{ message }}</h1>
    <li v-for = "(value, key) in columns" :key="key">
    {{ user.name }}:<button v-on:click="deleteUser(user.id)">削除</button>
    </li>
  </div>
</template>

<script>
export default {
  components: {
  },
    data(){
        return {
            users: [],
            name: ''
        }
    },
    methods: {
        getProducts () {
            this.axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                this.products = response.data
            })
        }
    }
}
</script>
