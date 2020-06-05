<template>
  <div class="container">
    <header class="header">
      <base-logo />
    </header>

    <nuxt class="main" />

    <the-aside class="aside" />
    <the-footer class="footer" />
  </div>
</template>

<script>
import BaseLogo from '~/components/Base/BaseLogo.vue'
import TheAside from '~/components/Layout/TheAside.vue'
import TheFooter from '~/components/Layout/TheFooter.vue'
export default {
  components: {
    BaseLogo,
    TheAside,
    TheFooter
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
}
.footer {
  grid-area: footer;
}
</style>
