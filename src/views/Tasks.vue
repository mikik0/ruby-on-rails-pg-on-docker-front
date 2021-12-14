<template>
  <div>
    <h1>Task</h1>
    <v-row>
      <v-col cols="4">
      <form>
        <v-text-field
          v-model="task.title"
          label="Title"
        ></v-text-field>
        <v-textarea
          v-model="task.content"
          label="Content"
        ></v-textarea>

        <v-btn class="mr-4" @click="onSubmit">Create</v-btn>
      </form>
      </v-col>
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
export default {
  data() {
    return {
      task: {}
    }
  },
  methods: {
    onSubmit() {
    }
  }
}
</script> 