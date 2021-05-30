<template>
  <v-app>
    <HeaderComponent />
    <Nuxt />
  </v-app>
</template>

<script>
// components
import HeaderComponent from '~/components/HeaderComponent'

export default {
  components: {
    HeaderComponent,
  },
}
</script>
