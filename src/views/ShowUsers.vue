<template>
  <slider-component :users="users" :ids="ids"></slider-component>
</template>

<script>
import SliderComponent from "../components/global/SliderComponent.vue";

export default {
  name: "TesteToogle",
  components: {
    SliderComponent,
  },
  data() {
    return {
      users: [],
      ids: [],
    };
  },
  methods: {
    getUsers() {
      fetch("https://randomuser.me/api/?results=20")
        .then((data) => data.json())
        .then((data) => {
          if (data) {
            this.users = data.results.map((user) => ({
              id: user.id.value,
              fullName: user.name.first + " " + user.name.last,
              avatar: user.picture.thumbnail,
              gender: user.gender,
              messages: [
                {
                  from: user.name.first,
                  message: `Sure, I'll see you later.`,
                  time: `${new Date().getHours()}:${new Date().getMinutes()}h`,
                  color: "green lighten-1",
                },
              ],
            }));

            const randomIds = [];
            for (let i = 0; i < this.users.length; i++) {
              randomIds.push(Math.floor(Math.random() * this.users.length));
            }

            this.ids = this.users
              .map((user) => user.id)
              .filter((id, i) => randomIds.includes(i));
          }
        });
    },
  },
  created() {
    this.getUsers();
  },
};
</script>

<style>
</style>