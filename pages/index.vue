/* eslint-disable vue/no-v-html */
<template>
  <main class="main">
    <section class="home">
      <!-- <img
        alt="Bardzo smaczna Pizza z Restauracji Dzika róża"
        class="home__hero"
        srcset="
          /img/pizza-small.png 250h,
          /img/pizza.png 300h"
        sizes="(min-width: 320px) 768px 1024px 1440px"
        src="/img/pizza.png"
      > -->

      <picture class="home__hero">
        <source
          srcset="/img/pizza-small.png"
          media="(max-width: 767px)"
        >
        <source
          srcset="/img/pizza.png"
          media="(max-width: 1023px)"
        >
        <source
          srcset="/img/pizza.png"
          media="(min-width: 1024px)"
        >
        <img
          src="/img/pizza-small.png"
          alt="Bardzo smaczna Pizza z Restauracji Dzika róża"
          class="home__hero"
        >
      </picture>

      <header class="home__header">
        <slogan
          :home-title="home_page_title"
          :cta-title="cta_phone_text"
          :cta-phone="cta_phone_number"
          class="home__slogan"
        />
      </header>
      <navigation class="home__navigation" />
      <section class="home__body">
        <h4 class="home__text">
          {{ company_opening_hours_header }}
        </h4>
        <p
          class="home__text"
          v-html="$md.render(company_opening_hours)"
        />
        <p
          class="home__text"
          v-html="$md.render(company_address)"
        />
      </section>
    </section>
  </main>
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
    ...mapState({
      home_page_title: state => state.homePage.home_page_title,
      cta_phone_text: state => state.homePage.cta_phone_text,
      cta_phone_number: state => state.homePage.cta_phone_number,
      company_opening_hours_header: state => state.homePage.company_opening_hours_header,
      company_opening_hours: state => state.homePage.company_opening_hours,
      company_address: state => state.homePage.company_address
    })
  }
}
</script>

<style lang="scss" scoped>
.main {
  grid-area: main;
  grid-column: 1 / 3;
  grid-row: header-start / aside-end;
}
.home {
  display: grid;
  grid-template-columns: 1fr var(--home-hero-image-size);
  // grid-template-rows: min-content 1fr auto 1fr;
  grid-template-rows: max-content min-content 1fr;
  grid-template-areas:
    'header hero'
    'menu .'
    'body .';
  min-height: 100%;
  overflow-x: hidden;

  // @media (min-width: 1024px) {
  //   --home-hero-image-size: 150px;
  //   grid-template-areas:
  //     'header hero'
  //     'menu .'
  //     '. body';
  // }

  @media (min-height: 736px) {
    --home-hero-image-size: 100px;
    grid-template-rows: 1fr min-content 1fr;
  }

  @media (min-width: 768px) {
    --home-hero-image-size: 300px;
    grid-template-rows: max-content min-content 1fr;
  }

  @media (min-width: 1024px) {
    --home-hero-image-size: 400px;
    grid-template-areas:
      'header hero'
      'menu body';
  }

  @media (min-width: 1025px) {
    --home-hero-image-size: calc(500px + var(--spacing));
  }

  &__header {
    grid-area: header;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: calc(32px + var(--spacing));

    // display: grid;
    // grid-template-columns: 1fr var(--home-hero-image-size);
    // grid-template-areas: 'copy hero';
    // grid-auto-flow: dense;
  }

  &__hero {
    grid-area: hero;
    min-height: 250px;
    object-fit: none;
    object-position: left center;
    filter: drop-shadow(0px 12px 24px rgba(179, 179, 179, 0.89));

    @media (min-width: 1024px) {
      padding-right: 100px;
    }
  }

  &__slogan {
    grid-area: copy;
    // align-self: center;
    // margin-top: max(1.25rem, 3rem);
  }

  &__navigation {
    grid-area: menu;
    // margin: 1rem 1rem 1rem 0;
    @media (min-width: 1024px) {
      width: 80%;
    }
  }

  &__body {
    grid-area: body;
    align-self: center;
    grid-auto-flow: dense;
    // display: flex;
    // flex-direction: column;
    // align-content: center;
    padding-top: var(--spacing);
    padding-left: var(--spacing);
    // padding-top: 50%;

    @media (min-height: 736px) {
      align-self: start;
      padding-top: calc(var(--spacing) * 2);
    }

    @media (min-width: 1024px) {
      // align-self: start;
      padding: 0;
      padding-top: calc(var(--spacing) / 2);
      // margin-top: var(--spacing);
    }
  }

  &__text {
    font-size: $normal-fs;
    margin: 0;
  }
}

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
