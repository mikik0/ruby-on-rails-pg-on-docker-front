<template>
  <div>
    <h1>Task</h1>
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
      tasks: []
    }
  },
  mounted () {
    axiosBase.get('/tasks')
      .then(response => { 
        response.data.forEach(task => {
          this.tasks.push(task)
        })
      })
  }
}
</script>