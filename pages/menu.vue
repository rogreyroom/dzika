<template>
  <main class="main">
    <section class="menu">
      <header class="menu__header">
        <h2 class="menu__title">
          Nasze menu
        </h2>
        <p class="menu__subtitle">
          Zapraszamy na smaczne potrawy, wykonane z <span class="heart">❤️</span> przez Szefa Kuchni.
        </p>
      </header>

      <div class="menu__hero">
        <picture>
          <source
            srcset="/img/garden.png"
            media="(max-width: 767px)"
          >
          <source
            srcset="/img/garden.png"
            media="(max-width: 1023px)"
          >
          <source
            srcset="/img/garden.png"
            media="(min-width: 1024px)"
          >
          <img
            src="/img/garden.png"
            alt="Sala moninkoa w Restauracji Dzika Róża"
            class="menu__image"
          >
        </picture>
      </div>

      <section class="menu__body">
        <ul class="menu__category">
          <li
            v-for="({category, dishes}, catIndex) in categories"
            :key="catIndex"
            class="menu__item"
          >
            <the-header :title="category" />
            <ul class="food">
              <li
                v-for="({
                  dish_name,
                  dish_description,
                  dish_size,
                  dish_price
                }, index) in dishes"
                :key="index"
                class="food__item"
              >
                <the-card
                  :title="dish_name"
                  :description="dish_description"
                  :size="dish_size"
                  :price="dish_price"
                />
              </li>
            </ul>
          </li>
        </ul>
      </section>
    </section>
    <div class="nav-button">
      <base-button
        :title="getNavigationTitle"
        :url="url"
        class="button--radius button--shadow"
      />
    </div>
  </main>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import TheHeader from '~/components/MenuPage/TheHeader.vue'
import TheCard from '~/components/MenuPage/TheCard.vue'
import BaseButton from '~/components/Base/BaseButton.vue'

export default {
  components: {
    TheHeader,
    TheCard,
    BaseButton
  },
  data () {
    return {
      url: '/events'
    }
  },
  computed: {
    ...mapState({
      categories: state => state.menuPage.categories
    }),
    ...mapGetters(['GET_NAVIGATION_BY_URL']),
    getNavigationTitle () {
      return this.GET_NAVIGATION_BY_URL(this.url)[0].title
    }
  }
}
</script>

<style lang="scss" scoped>
.menu {
  --menu-title-font-face: var(--ff-primary);
  --menu-title-font-size: var(--title-small);
  --menu-title-font-weight: var(--fw-normal);
  --menu-title-color: var(--black);
  --menu-title-margin: var(--space-normal);
  --menu-subtitle-font-face: var(--secondary);
  --menu-subtitle-font-size: var(--body-small);
  --menu-subtitle-font-weight: var(--fw-normal);
  --menu-subtitle-color: var(--black);
  --events-big-margin: var(--space-lg);
  --menu-body-padding: var(--space-sm) var(--space-normal);
  --menu-header-height: 200px;

  padding: var(--menu-body-padding);

  @media (min-width: 768px) {
    --menu-body-padding: var(--space-sm) var(--space-md);
    display: grid;
    gap: 50px;
  }

  @media (min-width: 1024px) {
    --menu-body-padding: var(--space-md) var(--space-lg);
  }

  &__header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: var(--menu-header-height);

    @media (min-width: 768px) {
      --menu-header-height: 250px;
      width: 50%;
      align-self: flex-start;
    }
    @media (min-width: 1024px) {
      --menu-title-font-size: var(--title-normal);
      --menu-subtitle-font-size: var(--body-normal);
    }

    @media (min-width: 1600px) {
      --menu-title-font-size: var(--title-large);
      --menu-subtitle-font-size: var(--body-large);
      --menu-header-height: 350px;
    }
  }

  &__title {
    font-family: var(--menu-title-font-face);
    font-size: var(--menu-title-font-size);
    font-weight: var(--menu-title-font-weight);
    color: var(--menu-title-color);
    margin-bottom: var(--menu-title-margin);
  }

  &__subtitle {
    font-family: var(--menu-subtitle-font-face);
    font-size: var(--menu-subtitle-font-size);
    font-weight: var(--menu-subtitle-font-weight);
    color: var(--menu-subtitle-color);
    text-align: center;
    margin-bottom: var(--menu-title-margin);

    .heart {
      display: inline-block;
      animation: heart 2s ease-in-out infinite;
    }
  }

  &__hero {
    @media (min-width: 768px) {
      position: absolute;
      right: 0;
      top: 0;
      width: 350px;
      height: 300px;
    }

    @media (min-width: 1024px) {
      width: 500px;
    }

    @media (min-width: 1600px) {
      height: 400px;
      width: 700px;
    }
  }

  &__image {
    width: 90%;
    height: 100%;
    display: block;
    margin: 0 auto;
    object-fit: cover;
    object-position: center;
    filter: drop-shadow(var(--shadow-light-glow));

    @media (min-width: 768px) {
      margin: 0;
      width: 100%;
      border-radius: 0 0 0 200px;
    }
  }

  &__body {
    display: grid;
    align-items: center;
    margin-top: var(--space-md);
  }

  &__category {
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
    columns: 1;

    @media (min-width: 736px) {
      columns: 2;
    }

    @media (min-width: 1024px) {
      columns: 3;
    }

    @media (min-width: 1440px) {
      columns: 4;
    }
  }

  &__item {
    margin-bottom: var(--space-normal);
    break-inside: avoid;

    &:last-child {
      margin-bottom: 0;
    }
  }
}
.food {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;

  &__item {
  }
}

.nav-button {
  position: fixed;
  z-index: 10;
  bottom: var(--space-lg);
  left: 50%;
  transform: translateX(-50%);
  // display: inline-flex;
  white-space: nowrap;

  @media (min-width: 736px) {
    display: none;
  }
}

@keyframes heart {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
  }
}
</style>
