<template>
  <div class="container">
    <header class="header">
      <base-logo />
      <the-navigation />
    </header>

    <nuxt class="main" />

    <the-aside class="aside" />
    <the-footer class="footer" />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import BaseLogo from '~/components/Base/BaseLogo.vue'
import TheNavigation from '~/components/HomePage/TheNavigation.vue'
import TheAside from '~/components/Layout/TheAside.vue'
import TheFooter from '~/components/Layout/TheFooter.vue'
export default {
  components: {
    BaseLogo,
    TheNavigation,
    TheAside,
    TheFooter
  },
  computed: {
    ...mapState(['isHome'])
  },
  created () {
    this.$nuxt.$route.path === '/'
      ? this.SET_IS_HOME(true)
      : this.SET_IS_HOME(false)
  },
  methods: {
    ...mapMutations(['SET_IS_HOME'])
  }
}
</script>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr var(--home-hero-image-size);
  grid-template-rows: max-content minmax(min-content, 1fr) auto auto;
  grid-template-areas:
    'header header'
    'main aside'
    'footer footer';

  @media (min-width: 1024px) {
    grid-template-areas:
      'header heder'
      'main main'
      'aside aside'
      'footer footer';
  }
}
.header {
  grid-area: header;
  z-index: 10;
}
.main {
  grid-area: main;
}
.aside {
  grid-area: aside;
  // grid-row: header-start;
}
.footer {
  grid-area: footer;
}
</style>
