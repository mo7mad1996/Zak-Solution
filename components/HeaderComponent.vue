<template>
  <header class="baseHeader" :class="[pos, $route.name]">
    <!-- left -->
    <nuxt-link to="Left" class="Left">
      <v-btn plain height="100%" width="100%" @click="setPos('fixed')"
        >Left</v-btn
      >
    </nuxt-link>

    <nuxt-link to="/" class="logo-container">
      <v-btn icon class="button" @click="setPos('static')">
        <v-icon>mdi-alpha-z-circle</v-icon>
      </v-btn>
    </nuxt-link>

    <!-- right -->
    <nuxt-link to="Right" class="Right">
      <v-btn plain height="100%" width="100%" @click="setPos('fixed')">
        Right
      </v-btn>
    </nuxt-link>
  </header>
</template>

<script>
// Vuex
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters('siteBase', ['pos']),
  methods: {
    ...mapActions('siteBase', ['setPos']),
  },
}
</script>

<style lang="scss" scoped>
.baseHeader {
  display: flex;
  align-items: center;
  overflow: hidden;
  transition: 1s;

  &::after,
  &::after {
    content: '';
    z-index: 3;
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  .Left,
  .Right {
    transition: 0.8s;

    &::after,
    &::after {
      content: '';
      z-index: 3;
      pointer-events: none;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
    }
  }

  @media (max-width: 700px) {
    flex-direction: column;
  }

  &.static {
    position: relative;
    height: 100vh;

    @media (max-width: 700px) {
      .Right {
        margin-top: -40px;
      }
      .Left {
        margin-bottom: -40px;
      }
    }
    @media (min-width: 700px) {
      .Right {
        margin-left: -40px;
      }
      .Left {
        margin-right: -40px;
      }
    }

    .Left,
    .Right {
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

    .Right::after {
      background: #3b6ce340;
    }
    .Left::after {
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

  &.fixed {
    width: 100%;
    display: flex;
    height: 50px;
    position: relative;

    .Left,
    .Right {
      flex: 1;
    }

    &.Right {
      &::after {
        content: '';
        background: #3b6ce340;
      }

      .Left {
        flex: 0;
      }
    }

    &.Left {
      &::after {
        content: '';
        background: #e33b6c40;
      }

      .Right {
        flex: 0;
      }
    }
  }
}
</style>
