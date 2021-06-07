<template>
  <header
    class="baseHeader"
    :class="[$route.name == 'index' ? pos : 'fixed', class_name]"
  >
    <!-- left -->
    <nuxt-link to="/left" class="left">
      <v-btn
        :dark="dark"
        plain
        height="100%"
        width="100%"
        @click="setPos('fixed')"
      >
        left
      </v-btn>
    </nuxt-link>

    <!-- Logo -->
    <div
      to="/"
      ref="logo"
      class="logo-container anmation"
      @animationend="anmationend"
    >
      <v-btn :dark="dark" class="set" icon>
        <v-icon>mdi-google-translate</v-icon>
      </v-btn>

      <nuxt-link to="/">
        <v-btn
          text
          color="transparent"
          class="button pa-0"
          @click="setPos('static')"
          :dark="dark"
        >
          <!-- <v-icon>mdi-alpha-z-circle</v-icon> -->
          <img
            src="https://cdn.dribbble.com/users/1309677/screenshots/13268859/media/f8d2212cbba4a41e8a07fe531bb96b46.png?compress=1&resize=1600x1200"
            alt=""
            class="logo"
          />
        </v-btn>
      </nuxt-link>

      <v-btn class="set" @click="toggledark" :dark="dark" icon>
        <v-icon>mdi-lamp</v-icon>
      </v-btn>
    </div>

    <!-- right -->
    <nuxt-link to="/right" class="right">
      <v-btn
        :dark="dark"
        plain
        height="100%"
        width="100%"
        @click="setPos('fixed')"
      >
        <div class="v-btn_content">
          <div>right</div>
          <div class="links">
            <nuxt-link to="/right/One">One</nuxt-link>
            <nuxt-link to="/right/Two">Two</nuxt-link>
          </div>
        </div>
      </v-btn>
    </nuxt-link>
  </header>
</template>

<script>
// Vuex
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'HeaderComponent',
  computed: {
    ...mapGetters('siteBase', ['pos', 'dark']),
    class_name: function () {
      return this.$route.path.toString().split('/')
    },
  },
  methods: {
    ...mapActions('siteBase', ['setPos', 'toggledark']),
    anmationend: function () {
      this.$refs.logo.classList.remove('anmation')
    },
  },
  mounted() {
    console.log(this.class_name)
  },
}
</script>

<style lang="scss" scoped>
.baseHeader {
  display: flex;
  align-items: center;
  overflow: hidden;
  transition: 0.8s;
  perspective: 1000px;

  a {
    height: 100%;
  }

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
    transition: background 0.8s;
  }

  .left,
  .right {
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

  &.static {
    position: relative;
    height: 100vh;

    @media (max-width: 700px) {
      flex-direction: column;
    }

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
      transition: 0.8s;

      &:hover {
        flex: 1.2;

        .links a {
          bottom: 0;

          &:nth-of-type(2) {
            transition-delay: 0.3s;
            z-index: 1;
          }
        }
      }
      .links {
        overflow: hidden;
        position: absolute;

        a {
          transition: 0.3s;
          z-index: 2;
          display: block;
          position: relative;
          bottom: -50px;
          margin: 5px 10px;
        }
      }
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
      gap: 10px;
      flex-direction: column;
      position: relative;
      z-index: 4;
      width: 80px;
      height: 80px;
      transition: 0.8s;

      &.anmation {
        animation: land 3s ease forwards;
        pointer-events: none;
      }

      .button {
        display: flex;
        height: 80px;
        width: 80px;
        overflow: hidden;
        background: transparent;
        z-index: 2;

        .logo {
          object-fit: cover;
          transition: 0.3s;
          height: 2em;
          width: 2em;
          // background: white;
        }
      }

      .set {
        margin: -5em -3em;
        transition: 0.3s;
      }

      &:hover {
        transform: translate(0, 0, 650px);

        .button {
          transform: scale(1.2);
        }

        .set {
          margin: 0;
        }
      }
    }
  }

  &.fixed {
    width: 100%;
    display: flex;
    height: 50px;
    position: relative;

    .button {
      padding: 0;
      overflow: hidden;

      .logo {
        height: 100%;
        height: 80px;
        width: 100%;
        width: 80px;
        object-fit: cover;
      }
    }

    .left,
    .right {
      flex: 1;
    }

    &.right {
      &::after {
        content: '';
        background: #3b6ce340;
      }

      .left {
        flex: 0;
      }
    }

    &.left {
      &::after {
        content: '';
        background: #e33b6c40;
      }

      .right {
        flex: 0;
      }
    }
  }
}
</style>
