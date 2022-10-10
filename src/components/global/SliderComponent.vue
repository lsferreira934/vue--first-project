<template>
  <v-sheet class="mx-auto mt-10" max-width="900">
    <v-slide-group v-model="model" class="pa-4" center-active show-arrows>
      <v-slide-item v-for="user in users" :key="user.id">
        <card-component :user="user" :ids="ids"></card-component>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>
<script>
import CardComponent from "./CardComponent.vue";
export default {
  name: "SliderComponent",
  components: {
    CardComponent,
  },
  props: {
    users: {
      type: Array,
    },
    ids: {
      type:Array,
    }
  },
  data() {
    return {
      model: null,
      toogle: false,
    };
  },
  methods: {
    switchColor() {
      this.toogle = !this.toogle;
    },
  },
};
</script>

<style>
</style>