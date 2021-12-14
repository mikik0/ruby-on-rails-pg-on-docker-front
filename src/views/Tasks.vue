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
        <td>{{ task }}</td>
        <td>{{ task.title }}</td>
        </tr>
    </tbody>
    </table>    
      <v-col cols="8">
        <table>
          <tr>
            <th>Title</th>
            <th>Content</th>
          </tr>
          <tr>
            <td>show</td>
            <td>Edit</td>
            <td>Destroy</td>
          </tr>
        </table>
      </v-col>
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
        this.tasks = response.data
        console.log(response.data)
      })
      .catch((error)=>{
      console.log(error)
    })
  }
}
</script>