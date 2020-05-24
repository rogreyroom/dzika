/* eslint-disable vue/no-v-html */
<template>
  <div class="container">
    <header class="header">
      <logo class="header__logo" />
      <img
        srcset="/img/pizza-small.png 250h, /img/pizza.png 350h"
        sizes="(max-width: 600px) 480px,
              800px"
        src="/img/pizza-small.png"
        alt="Bardzo smaczna Pizza z Restauracji Dzika róża"
        class="header__image"
      >
      <slogan
        :slogan="homePage.home_page_title"
        :phone="homePage.phone"
        class="header__slogan"
      />
    </header>

    <nav class="navigation">
      <page-menu :navigation-arr="{}" />
    </nav>

    <main class="main">
      <section class="home">
        <h4 class="home__text">
          {{ homePage.open_header }}
        </h4>
        <section class="home__section">
          <div
            class="home__text"
            v-html="$md.render(homePage.open_time)"
          />
        </section>
        <section class="home__section">
          <div
            class="home__text"
            v-html="$md.render(homePage.address)"
          />
        </section>
      </section>
    </main>

    <aside class="aside">
      <social :social="{}" />
    </aside>

    <footer class="footer">
      <page-footer />
    </footer>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Logo from '~/components/Header/Logo.vue'
import Slogan from '~/components/Header/Slogan.vue'
import Social from '~/components/Aside/Social.vue'
import PageFooter from '~/components/Footer/PageFooter.vue'
import PageMenu from '~/components/Navigation/PageMenu.vue'

export default {
  components: {
    Logo,
    Slogan,
    Social,
    PageFooter,
    PageMenu
  },
  data () {
    return {
    }
  },
  computed: {

    ...mapState('homePage', ['home_page_title', 'cta_phone_text', 'cta_phone_number', 'company_opening_hours_header', 'company_opening_hours', 'company_address'])
  },
  mounted () {
  }

}
</script>

<style lang="scss" scoped>
$image-size: 80px;

.container {
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr) $image-size;
  grid-template-rows: auto auto minmax(min-content, 1fr) auto;
  grid-template-areas:
    'header header header'
    'nav nav .'
    'main main aside'
    'footer footer footer';
}
.header {
  grid-area: header;
  display: grid;
  grid-template-columns: repeat(2, 1fr) $image-size;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    'logo logo image'
    'slogan slogan image';

  &__logo {
    grid-area: logo;
    margin-top: var(--spacing);
    margin-left: var(--spacing);
  }

  &__image {
    grid-area: image;
    height: 250px;
    object-fit: none;
    object-position: left center;
  }

  &__slogan {
    grid-area: slogan;
    margin-left: var(--spacing);
  }
}

.navigation {
  grid-area: nav;
}

.main {
  grid-area: main;
}

.home {
  margin-left: var(--spacing);
  margin-bottom: var(--spacing);

  &__section {
    margin-top: 1rem;
  }

  &__text {
    font-size: $normal-fs;
    margin: 0;
    white-space: pre-line;
  }
}

.aside {
  grid-area: aside;
}

.footer {
  grid-area: footer;
  bottom: 0;
}
</style>
