<template>
  <div class="container">
    <header class="header">
      <base-logo class="header__logo" />
      <base-navigation />
    </header>

    <nuxt class="main" />

    <the-aside class="aside" />
    <the-footer class="footer" />
  </div>
</template>

<script>
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
  },
  created () {
  },
  methods: {
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
  position: relative;

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
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (min-width: 1024px) {
    --header-padding: var(--space-md);
  }

  &__logo {
    flex-shrink: 0;
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
