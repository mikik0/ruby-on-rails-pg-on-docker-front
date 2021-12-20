<template>
  <div>
    <h1>詳細ページ</h1>
    <p>タイトル: {{ task.title }}</p>
    <p>内容: {{ task.content }}</p>
    <router-link to="/tasks">戻る</router-link>
    </div>
</template>

<script>
import {axiosBase} from '../api/index'
export default {
  name: 'ShowTaskDetail',
  data () {
    return {
      task: {
        title: '',
        content: ''
      }
    }
  },
  mounted () {
    axiosBase.get('/tasks/' + this.$route.params.id)
      .then(response => { 
        this.task = response.data
      })
  }
}
</script>