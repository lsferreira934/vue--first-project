<template>
  <v-container>
    <h1>Tarefa</h1>
    <v-row class="mt-10 pa-4">
      <task-form-component
        :title="title"
        :description="description"
      ></task-form-component>

      <v-col cols="12" xs="12" sm="6" md="6" lg="6">
        <v-card
          v-for="(task, index) in $store.state.tasks"
          :key="index"
          multiple
          class="overflow-y-auto pa-2 mb-4"
          max-height="300"
        >
          <task-component :task="task" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TaskComponent from "../components/tasks/TaskComponent";
import TaskFormComponent from "../components/tasks/TaskFormComponent";

export default {
  name: "TasksView",
  components: {
    TaskComponent,
    TaskFormComponent,
  },
  data() {
    return {
      tasks: [],
      title: "",
      description: "",
    };
  },
  created() {
    this.tasks = this.$store.state.tasks;
  },
};
</script>
