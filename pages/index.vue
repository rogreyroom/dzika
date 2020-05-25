/* eslint-disable vue/no-v-html */
<template>
  <section class="home">
    <header class="header">
      <img
        srcset="/img/pizza-small.png 250h, /img/pizza.png 350h"
        sizes="(max-width: 600px) 480px,
              800px"
        src="/img/pizza-small.png"
        alt="Bardzo smaczna Pizza z Restauracji Dzika róża"
        class="header__image"
      >
      <slogan
        :home-title="home_page_title"
        :cta-title="cta_phone_text"
        :cta-phone="cta_phone_number"
        class="header__slogan"
      />
      <navigation />
    </header>
    <section>
      <h4 class="home__text">
        {{ company_opening_hours_header }}
      </h4>
      <section class="home__section">
        <div
          class="home__text"
          v-html="$md.render(company_opening_hours)"
        />
      </section>
      <section class="home__section">
        <div
          class="home__text"
          v-html="$md.render(company_address)"
        />
      </section>
    </section>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import Slogan from '~/components/Home/Slogan.vue'
import Navigation from '~/components/Home/Navigation/Navigation.vue'

export default {
  components: {
    Slogan,
    Navigation
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['home_page_title', 'cta_phone_text', 'cta_phone_number']),
    ...mapState({
      company_opening_hours_header: state => state.homePage.company_opening_hours_header,
      company_opening_hours: state => state.homePage.company_opening_hours,
      company_address: state => state.homePage.company_address
    })
  }
}
</script>

<style lang="scss" scoped>
// $image-size: 80px;

// .container {
//   min-height: 100vh;
//   display: grid;
//   grid-template-columns: repeat(2, 1fr) $image-size;
//   grid-template-rows: auto auto minmax(min-content, 1fr) auto;
//   grid-template-areas:
//     'header header header'
//     'nav nav .'
//     'main main aside'
//     'footer footer footer';
// }
// .header {
//   grid-area: header;
//   display: grid;
//   grid-template-columns: repeat(2, 1fr) $image-size;
//   grid-template-rows: auto 1fr;
//   grid-template-areas:
//     'logo logo image'
//     'slogan slogan image';

//   &__logo {
//     grid-area: logo;
//     margin-top: var(--spacing);
//     margin-left: var(--spacing);
//   }

//   &__image {
//     grid-area: image;
//     height: 250px;
//     object-fit: none;
//     object-position: left center;
//   }

//   &__slogan {
//     grid-area: slogan;
//     margin-left: var(--spacing);
//   }
// }

// .navigation {
//   grid-area: nav;
// }

// .main {
//   grid-area: main;
// }

// .home {
//   margin-left: var(--spacing);
//   margin-bottom: var(--spacing);

//   &__section {
//     margin-top: 1rem;
//   }

//   &__text {
//     font-size: $normal-fs;
//     margin: 0;
//   }
// }

// .aside {
//   grid-area: aside;
// }

// .footer {
//   grid-area: footer;
//   bottom: 0;
// }
</style>
