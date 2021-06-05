<template>
  <v-app :class="{ dark: dark }">
    <HeaderComponent />
    <Nuxt />
  </v-app>
</template>

<script>
// components
import HeaderComponent from '~/components/HeaderComponent'
import { mapGetters } from 'vuex'

export default {
  components: {
    HeaderComponent,
  },
  computed: {
    ...mapGetters('siteBase', ['dark']),
  },
}
</script>

<style>
.dark {
  background: #40485b !important;
}
</style>
