<template>
  <main class="main">
    <section class="home">
      <div class="home__hero">
        <img
          src="/img/pizza.png"
          srcset="/img/pizza.png 1x, /img/pizza@2x.png 2x"
          width="300"
          height="300"
          class="home__image"
        >
        <!-- <picture class="home__hero">
        <source
          type="image/webp"
          srcset="pizza.webp"
          media="(min-width: 1024px)"
        >
        <source
          srcset="/img/pizza.png"
          media="(min-width: 1024px)"
        >
        <source
          type="image/webp"
          srcset="pizza-medium.webp"
          media="(min-width: 736px)"
        >
        <source
          srcset="/img/pizza-medium.png"
          media="(min-width: 320px) and (min-height: 736px)"
        >
        <img
          src="/img/pizza-small.png"
          alt="Bardzo smaczna Pizza z Restauracji Dzika róża"
          class="home__hero"
        >
      </picture> -->
      </div>
      <header class="home__header">
        <the-slogan
          :home-title="home_page_title"
          :cta-title="cta_phone_text"
          :cta-phone="cta_phone_number"
          class="home__slogan"
        />
      </header>
      <the-navigation class="home__navigation" />
      <img
        src="/img/tomato.png"
        srcset="/img/tomato.png 1x, /img/tomato@2x.png 2x"
        width="300"
        height="300"
        class="home__tomato"
      >
      <section class="home__body">
        <h4 class="home__text">
          {{ company_opening_hours_header }}
        </h4>
        <div
          class="home__text"
          v-html="$md.render(company_opening_hours)"
        />
        <div
          class="home__text"
          v-html="$md.render(company_address)"
        />
      </section>
    </section>
  </main>
</template>

<script>
import { mapState } from 'vuex'
import TheSlogan from '~/components/HomePage/TheSlogan.vue'
import TheNavigation from '~/components/HomePage/TheNavigation.vue'

export default {
  layout: 'home',
  components: {
    TheSlogan,
    TheNavigation
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
  grid-column: 1 / 3;
  grid-row: header-start / aside-end;
}

.home {
  --home-body-text-font-face: var(--ff-secondary);
  --home-body-text-font-size: var(--body-small);
  --home-body-text-font-weight: var(--fw-normal);
  --home-body-text-padding: var(--space-xs) 0;
  --home-spacing: var(--space-normal);
  --home-hero-image-size: 80px;
  --logo-height: 45px;

  display: grid;
  grid-template-columns: 1fr var(--home-hero-image-size);
  grid-template-rows: var(--logo-height) max-content min-content 1fr;
  grid-template-areas:
    '. hero'
    'header hero'
    'menu .'
    'body .';
  min-height: 100%;
  overflow-x: hidden;

  @media (min-width: 768px) {
    --home-hero-image-size: 200px;
    --home-spacing: var(--space-lg);
  }

  @media (min-width: 1024px) {
    --home-hero-image-size: 400px;
    grid-template-rows: var(--logo-height) max-content auto 1fr;
    grid-template-areas:
      '. hero'
      'header hero'
      'menu body'
      'tomato body';
  }

  @media (min-width: 1024px) {
    --home-hero-image-size: 500px;
    grid-template-columns: repeat(2, 1fr);
  }

  &__hero {
    grid-area: hero;
    height: 250px;
    // object-fit: none;
    // object-position: left center;
    // filter: drop-shadow(var(--shadow-light-glow-large));

    @media (min-height: 736px) {
      height: 320px;
    }

    @media (min-height: 768px) {
      min-height: 440px;
    }

    @media (min-width: 1024px) {
      padding-top: var(--space-md);
      align-self: center;
      display: flex;
      justify-content: center;
    }
  }

  &__image {
    max-width: 100%;
    min-height: auto;
    // display: block;
    // margin: 0 auto;
    object-fit: none;
    object-position: left center;
    filter: drop-shadow(-10px 15px 20px rgba(170, 170, 172, 0.5));
    align-self: center;
    justify-self: center;
  }

  &__header {
    grid-area: header;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: var(--home-spacing);
  }

  &__navigation {
    grid-area: menu;
  }

  &__tomato {
    display: none;

    @media (min-width: 1024px) {
      grid-area: tomato;
      display: block;
      width: 100%;
      max-width: 100%;
      min-height: auto;
      // display: block;
      // margin: 0 auto;
      object-fit: none;
      object-position: center center;
      filter: drop-shadow(-10px 15px 20px rgba(170, 170, 172, 0.5));
      align-self: center;
      justify-self: center;
    }
  }

  &__body {
    grid-area: body;
    align-self: center;
    display: flex;
    flex-direction: column;
    align-content: center;
    padding-left: var(--home-spacing);

    @media (min-width: 1024px) {
      justify-self: center;
      padding-left: 0;
    }

    @media (min-height: 1024px) {
      align-self: start;
      margin-top: 170px;
    }
  }

  &__text {
    font-family: var(--home-text-font-face);
    font-size: var(--home-text-font-size);
    font-weight: var(--home-text-font-weight);
    padding: var(--home-body-text-padding);

    @media (min-height: 768px) {
      --home-text-font-size: var(--body-normal);
    }
  }
}
</style>
