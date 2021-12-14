<template>
  <div class="home">
    <h1>Welcome to Task App !</h1>
    <router-link to="/tasks">start</router-link>
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      message: 'Welcome to Your Vue.js App',
    }
  }
}
</script>