<template>
  <div class="container">
    <header class="header">
      <site-logo />
      <site-navigation v-if="!isHome" />
    </header>
    <main class="main">
      <nuxt />
    </main>
    <site-aside class="aside" />
    <site-footer class="footer" />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import SiteLogo from '~/components/Layout/Logo.vue'
import SiteNavigation from '~/components/Layout/Navigation.vue'
import SiteAside from '~/components/Layout/Aside.vue'
import SiteFooter from '~/components/Layout/Footer.vue'
export default {
  components: {
    SiteLogo,
    SiteNavigation,
    SiteAside,
    SiteFooter
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
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto minmax(min-content, 1fr) auto auto;
  grid-template-areas:
    'header'
    'main'
    'aside'
    'footer';
}
.header {
  grid-area: header;
}
.main {
  grid-area: main;
}
.aside {
  grid-area: aside;
}
.footer {
  grid-area: footer;
}
</style>
