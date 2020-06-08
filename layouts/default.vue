<template>
  <div class="container">
    <header class="header">
      <base-logo />
      <base-navigation />
    </header>

    <nuxt class="main" />

    <the-aside class="aside" />
    <the-footer class="footer" />
  </div>
</template>

<script>
// import { mapState, mapMutations } from 'vuex'
import BaseLogo from '~/components/Base/BaseLogo.vue'
import BaseNavigation from '~/components/Base/BaseNavigation.vue'
import TheAside from '~/components/Layout/TheAside.vue'
import TheFooter from '~/components/Layout/TheFooter.vue'
export default {
  components: {
    BaseLogo,
    BaseNavigation,
    TheAside,
    TheFooter
  },
  computed: {
    // ...mapState(['isHome'])
  },
  created () {
    // this.$nuxt.$route.path === '/'
    //   ? this.SET_IS_HOME(true)
    //   : this.SET_IS_HOME(false)
  },
  methods: {
    // ...mapMutations(['SET_IS_HOME'])
  }
}
</script>

<style lang="scss" scoped>
.container {
  --header-padding: var(--space-sm);

  min-height: 100vh;
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content minmax(min-content, 1fr) auto auto;
  grid-template-areas:
    'header'
    'main'
    'aside'
    'footer';

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
  padding-top: var(--header-padding);
  padding-left: var(--header-padding);
  padding-right: var(--header-padding);

  @media (min-width: 1024px) {
    --header-padding: var(--space-md);
  }
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
