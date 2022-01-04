<template>
  <p>タスク編集</p>
  <div>
    <input v-model="title" type="text" placeholder="">
    <input v-model="content" type="text" placeholder="">
    <button @click="updateTodo">更新</button>
  </div>
  <router-link to="/tasks">戻る</router-link>
</template>

<script>
import {axiosBase} from '../../api/index'
export default {
  name: 'TasksEdit',
  data () {
    return {
      title: '',
      content: ''
    }
  },
  methods: {
    updateTodo: function () {
      if (this.title === "" || this.content === "") {
        alert("タイトルと内容を入力してください")
        return
      }
      axiosBase.put('/tasks/' + this.$route.params.id, { task: { title: this.title, content: this.content } })
        .then(response => {
          this.tasks.push(response.data)
          this.$router.push('/tasks')
        })
    }
  },
  created: function () {
    axiosBase.get('/tasks/' + this.$route.params.id)
      .then(response => {
        this.title = response.data.title
        this.content = response.data.content
      })
  }
}
</script>