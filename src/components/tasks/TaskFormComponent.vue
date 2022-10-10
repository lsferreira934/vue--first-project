<template>
  <v-col align="center" justify="center" cols="12" xs="12" sm="6" md="6" lg="6">
    <v-card class="pa-5">
      <v-text-field
        v-model="localTitle"
        label="Titulo da tarefa"
        outlined
        clearable
        maxlength="45"
        counter
      ></v-text-field>

      <v-textarea
        v-model="localDescription"
        outlined
        label="Descrição da tarefa"
        maxlength="250"
        full-width
        single-line
        counter
      ></v-textarea>

      <v-btn color="success" title @click="handleAddTask" dark>
        <v-icon left dark> mdi-plus </v-icon>
        Adicionar tarefa
      </v-btn>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: "TaskForm",
  props: {
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      localTitle: this.title,
      localDescription: this.description,
    };
  },
  methods: {
    handleAddTask() {
      const task = {
        id: this.$store.state.tasks.length + 1,
        title: this.localTitle,
        description: this.localDescription,
        completed: false
      };

      this.$store.commit("addTask", task);
    },
  },
  computed: {
    
  }
};
</script>

<style>
</style>