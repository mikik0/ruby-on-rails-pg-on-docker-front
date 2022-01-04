<template>
  <div>
    <h1>Task</h1>
    <p>新規タスク作成</p>
    <div>
      <input v-model="title" type="text" placeholder="">
      <input v-model="content" type="text" placeholder="">
      <button @click="addTodo">追加</button>
    </div>
    <p>タスク一覧</p>
    <v-row>
      <table>
        <thead>
            <tr>
              <th>title</th>
              <th>content</th>
            </tr>
        </thead>
        <tbody>
          <tr v-for="task in tasks" :key="task.id">
            <td>{{ task.title }}</td>
            <td>{{ task.content }}</td>
            <td><router-link :to="'/tasks/' + task.id ">詳細</router-link></td>
            <td><router-link :to="'/tasks/' + task.id + '/edit'">編集</router-link></td>
            <td><button @click="deleteTodo(task.id)">削除</button></td>
          </tr>
        </tbody>
      </table>
    </v-row>
  </div>
</template>

<script>
import {axiosBase} from '../../api/index'
export default {
  name: 'Tasks',
  data () {
    return {
      tasks: [],
      title: "",
      content: ""
    }
  },
  created () {
    axiosBase.get('/tasks')
      .then(response => {
        this.tasks = response.data
      })
  },
  methods: {
    addTodo: function () {
      if (this.title === "" || this.content === "") {
        alert("タイトルと内容を入力してください")
        return
      }
      axiosBase.post('/tasks', {
        title: this.title,
        content: this.content
      })
        .then(response => {
          this.tasks.push(response.data)
          this.title = ""
          this.content = ""
        })
    }
  }
}
</script>
