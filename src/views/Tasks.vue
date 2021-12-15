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
        </tr>
    </tbody>
    </table>
    </v-row>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Tasks',
  data () {
    return {
      tasks: []
    }
  },
  mounted () {
    axios.get('http://localhost/tasks')
      .then(response => { 
        response.data.forEach(task => {
          this.tasks.push(task)
        })
        console.log(response.data)
      })
      .catch((error)=>{
      console.log(error)
    })
  }
}
</script>