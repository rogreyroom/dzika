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
        <img
          src="/img/garden.png"
          class="menu__image"
        >
      </header>

      <section class="menu__body">
        <!-- <ul class="menu__category">
          <li
            v-for="(category, catIndex) in categories"
            :key="catIndex"
            class="menu__item"
          >
            <the-header :title="category" />

            <ul class="food">
              <li
                v-for="(food, index) in foods"
                :key="index"
                class="food__item"
              >
                <the-card
                  :title="food.title"
                  :description="food.description"
                  :size="food.size"
                  :price="food.price"
                />
              </li>
            </ul>
          </li>
        </ul> -->
      </section>
    </section>
    <div class="nav-button">
      <base-button
        :title="getNavigationTitle"
        :url="url"
        class="button--radius button--shadow"
      />
    </div>
    =>> {{ menuPage }}
  </main>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
// import TheHeader from '~/components/MenuPage/TheHeader.vue'
// import TheCard from '~/components/MenuPage/TheCard.vue'
import BaseButton from '~/components/Base/BaseButton.vue'

export default {
  components: {
    // TheHeader,
    // TheCard,
    BaseButton
  },
  data () {
    return {
      url: '/events'
    }
  },
  computed: {
    ...mapState(['menuPage']),

    //   events_page_title: state => state.eventsPage.events_page_title,
    //   events_text: state => state.eventsPage.events_text,
    //   events_phone_number: state => state.eventsPage.events_phone_number,
    //   event_menu: state => state.eventsPage.event_menu
    // }),
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
  --menu-title-font-size: var(--title-normal);
  --menu-title-font-weight: var(--fw-normal);
  --menu-title-color: var(--black);
  --menu-subtitle-font-face: var(--secondary);
  --menu-subtitle-font-size: var(--body-small);
  --menu-subtitle-font-weight: var(--fw-normal);
  --menu-subtitle-color: var(--black);
  --menu-image-shadow: var(--shadow-light-glow-large);

  &__header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &__title {
    font-family: var(--menu-title-font-face);
    font-size: var(--menu-title-font-size);
    font-weight: var(--menu-title-font-weight);
    color: var(--menu-title-color);
  }

  &__subtitle {
    font-family: var(--menu-subtitle-font-face);
    font-size: var(--menu-subtitle-font-size);
    font-weight: var(--menu-subtitle-font-weight);
    color: var(--menu-subtitle-color);

    .heart {
      // Animacja bicia serca
      // transition: all ease-in-out 0.3s;
      display: inline-block;
      // &:hover {
      animation: heart 2s ease-in-out infinite;
      // }
    }
  }

  &__image {
    max-width: 100%;
    box-shadow: var(--menu-image-shadow);
  }

  &__body {
  }

  &__category {
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
  }

  &__item {
    margin-bottom: var(--space-normal);

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
  bottom: var(--space-lg);
  left: 50%;
  transform: translateX(-50%);
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
