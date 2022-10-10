<template>
  <div>
    <v-list-item @click="localTaskCompleted = !localTaskCompleted">
      <template>
        <v-list-item-action>
          <v-checkbox
            color="success"
            :input-value="localTaskCompleted"
          ></v-checkbox>
        </v-list-item-action>

        <v-list-item-content>
          <v-card-title
            class="font-weight-bold text-uppercase"
            :class="{
              'text-decoration-line-through text--disabled': localTaskCompleted,
            }"
          >
            {{ task.title }}
          </v-card-title>

          <v-expand-transition>
            <v-card-text
              v-show="!localTaskCompleted"
              class="font-weight-regular"
              :class="{
                'text-decoration-line-through text--disabled':
                  localTaskCompleted,
              }"
            >
              {{ task.description }}
            </v-card-text>
          </v-expand-transition>
        </v-list-item-content>
        <v-card-actions> </v-card-actions>
      </template>
    </v-list-item>

    <div class="d-flex flex-row-reverse mt-1">
      <button-component
        :newClass="'ml-2'"
        :icon="'mdi-minus'"
        :color="'error'"
        :value="task.id"
        :title="'Excluir'"
        @callbackButton="handleRemoveTask"
      >
      </button-component>
      <button-component
        :newClass="'ml-2'"
        :icon="'mdi-pencil'"
        :color="'primary'"
        :value="task"
        :title="'Editar'"
        @callbackButton="handleEditTask"
      >
      </button-component>
    </div>
  </div>
</template>

<script>
import ButtonComponent from "../global/ButtonComponent.vue";

export default {
  name: "TaskComponent",
  components: {
    ButtonComponent,
  },
  props: ["task", "index"],
  data() {
    return {
      localTaskCompleted: "",
      localTask: [],
    };
  },
  methods: {
    handleRemoveTask(value) {
      this.$store.commit("removeTask", value);
    },
    handleEditTask(value) {
      this.$store.commit("editTask", value);
    }
  },
  created() {
    this.localTaskCompleted = this.task.completed;
    this.localTask = this.task;
  },
};
</script>

<style>
</style>