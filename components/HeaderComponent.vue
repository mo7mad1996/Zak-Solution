<template>
  <div>hi {{ pos }}</div>
</template>
<script>
// Vuex
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters('siteBase', ['pos']),
}
</script>
