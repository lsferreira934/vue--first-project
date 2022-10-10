<template>
  <v-btn :class="newClass" x-small :color="color" @click="$emit('callbackButton', value)">
    <v-icon left dark>{{ icon }} </v-icon>
    {{title}}
  </v-btn>
</template>

<script>
export default {
  name: "ButtonComponent",
  props: ["value", "title", "newClass", "icon", "color"],
};
</script>

<style>
</style>