<template>
  <v-app dark>
    <v-toolbar v-if="isIntro" fixed app color="primary" dense flat>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    computed: {
      isIntro () {
        if (this.$route.name !== 'intro') {
          return true
        } else {
          return false
        }
      }
    },
    data: () => ({
      title: 'Vuetify.js'
    })
  }
</script>
