<template>
  <v-container>
    <v-row justify="space-around" cursorPointer  @click="userDetails()">
      <v-card width="280" class="ma-2">
        <v-img
          height="200px"
          src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
        >
          <v-app-bar flat color="rgba(0, 0, 0, 0)" >
            <v-spacer></v-spacer>
            <v-btn
              :color="applyFavoriteLabel ? 'green lighten-1' : '#fff'"
              icon
              @click.stop="applyFavorite()"
            >
              <v-icon>mdi-heart</v-icon>
            </v-btn>
          </v-app-bar>

          <v-card-title class="white--text mt-8">
            <v-avatar size="56">
              <img :alt="user.fullName" :src="user.avatar" />
            </v-avatar>

            <p class="ml-3">{{ user.fullName }}</p>
          </v-card-title>
        </v-img>
        <v-card-text>
          
        </v-card-text>  
        <!-- <v-card-text>
          <div class="font-weight-bold ml-8 mb-2">Today</div>

          <v-timeline align-top dense>
            <v-timeline-item
              v-for="message in user.messages"
              :key="message.time"
              :color="message.color"
              small
            >
              <div>
                <div class="font-weight-normal">
                  <strong>{{ message.from }}</strong> @{{ message.time }}
                </div>
                <div>{{ message.message }}</div>
              </div>
            </v-timeline-item>
          </v-timeline> 
        </v-card-text>-->
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
    },
    ids: {
      type: Array,
    },
  },
  data: () => ({
    applyFavoriteLabel: null,
  }),
  methods: {
    applyFavorite() {
      this.applyFavoriteLabel = !this.applyFavoriteLabel;
    },
    userDetails(){

    }
  },
  created() {
    this.applyFavoriteLabel = this.ids.includes(this.user.id);
  },
};
</script>

<style>
</style>