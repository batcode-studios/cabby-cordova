<template lang="html">
  <v-snackbar
    :timeout="timeout"
    :color="globalAlertColor"
    v-model="globalAlert"
    bottom
    right
  >
    {{ globalAlertMSG }}
  </v-snackbar>
</template>

<script type="text/javascript">
import { mapGetters } from 'vuex'

export default {
  name: 'global-alert',
  computed: {
    ...mapGetters({
      globalAlertColor: 'globalAlertColor',
      globalAlertMSG: 'globalAlertMSG'
    }),
    globalAlert: {
      get () {
        return this.$store.getters.globalAlert
      },
      set (v) {
        this.$store.commit('SET_GLOBAL_ALERT', v)
      }
    }
  },
  data: () => ({
    timeout: 6000
  })
}
</script>
