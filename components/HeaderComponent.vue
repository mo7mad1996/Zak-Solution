<template>
  <header class="baseHeader" :class="pos">
    <!-- left -->
    <v-btn plain class="left">Right</v-btn>

    <div class="logo-container">
      <v-btn icon="mdi-alpha-z-circle" class="button"> </v-btn>
    </div>

    <!-- right -->
    <v-btn plain class="right">right</v-btn>
  </header>
</template>

<script>
// Vuex
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters('siteBase', ['pos']),
}
</script>

<style lang="scss" scoped>
.baseHeader {
  display: flex;
  align-items: center;
  overflow: hidden;

  @media (max-width: 700px) {
    flex-direction: column;
  }

  &.static {
    position: relative;
    height: 100vh;

    @media (max-width: 700px) {
      .right {
        margin-top: -40px;
      }
      .left {
        margin-bottom: -40px;
      }
    }
    @media (min-width: 700px) {
      .right {
        margin-left: -40px;
      }
      .left {
        margin-right: -40px;
      }
    }

    .left,
    .right {
      flex: 1;
      position: relative;
      height: 100%;
      width: 100%;
      animation: fadein 3s ease;
      transition: 0.5s;

      &:hover {
        flex: 1.2;
      }
    }

    .right::after,
    .left::after {
      content: '';
      z-index: 3;
      pointer-events: none;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
    }

    .right::after {
      background: #3b6ce340;
    }
    .left::after {
      background: #e33b6c40;
    }

    .logo-container {
      display: flex;
      justify-content: center;
      align-items: center;
      background: transparent;
      position: relative;
      z-index: 4;
      width: 80px;
      height: 80px;
      animation: land 3s ease forwards;
      transition: 0.3s;
      border-radius: 50%;
      overflow: visible;

      img {
        scale: 1;
        background: white;
        transition: 0.3s;
        padding: 5px;
      }

      &:hover {
        scale: 2;

        img {
          // scale: 1.6;
        }
      }
    }
  }
}
</style>
