<template>
  <main class="main">
    <section class="events">
      <header class="events__header">
        <h2 class="events__title">
          {{ events_page_title }}
        </h2>
        <p
          class="events__body"
          v-html="$md.render(events_text)"
        />
        <p class="events__phone">
          {{ events_phone_number }}
        </p>
      </header>
      <div class="events__hero">
        <picture>
          <source
            srcset="/img/restaurant.png"
            media="(max-width: 767px)"
          >
          <source
            srcset="/img/restaurant.png"
            media="(max-width: 1023px)"
          >
          <source
            srcset="/img/restaurant.png"
            media="(min-width: 1024px)"
          >
          <img
            src="/img/restaurant.png"
            alt="Sala moninkoa w Restauracji Dzika Róża"
            class="events__image"
          >
        </picture>
      </div>
      <section class="event">
        <div
          v-for="({event_menu_name, event_menu_description, event_menu_price, event_menu_photo}, index) in event_menu"
          :key="index"
        >
          <the-event
            :index="index + 1"
            :name="event_menu_name"
            :description="event_menu_description"
            :price="event_menu_price"
            :photo="event_menu_photo"
          />
        </div>
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
import BaseButton from '~/components/Base/BaseButton.vue'
import TheEvent from '~/components/EventsPage/TheEvent'

export default {
  components: {
    BaseButton,
    TheEvent
  },
  data () {
    return {
      url: '/menu'
    }
  },
  computed: {
    ...mapState({
      events_page_title: state => state.eventsPage.events_page_title,
      events_text: state => state.eventsPage.events_text,
      events_phone_number: state => state.eventsPage.events_phone_number,
      event_menu: state => state.eventsPage.event_menu
    }),
    ...mapGetters(['GET_NAVIGATION_BY_URL']),
    getNavigationTitle () {
      return this.GET_NAVIGATION_BY_URL(this.url)[0].title
    }
  }

}
</script>

<style lang="scss" scoped>
.events {
  --events-title-font-face: var(--ff-primary);
  --events-title-font-size: var(--title-small);
  --events-title-font-weight: var(--fw-normal);
  --events-body-font-face: var(--ff-secondary);
  --events-body-font-size: var(--body-small);
  --events-body-font-weight: var(--fw-normal);
  --events-phone-font-face: var(--ff-primary);
  --events-phone-font-size: var(--title-small);
  --events-phone-font-weight: var(--fw-normal);
  --events-phone-underline-color: var(--primary);
  --events-margin: var(--space-normal);
  --events-padding: var(--space-sm) var(--space-normal);
  --events-header-height: 300px;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--events-padding);

  @media (min-width: 768px) {
    --events-padding: var(--space-sm) var(--space-md);
  }

  @media (min-width: 1024px) {
    --events-title-font-size: var(--title-normal);
    --events-subtitle-font-size: var(--body-normal);
    --events-padding: var(--space-md) var(--space-lg);
  }

  @media (min-width: 1600px) {
    --events-title-font-size: var(--title-large);
    --events-subtitle-font-size: var(--body-large);
  }

  &__header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: var(--events-header-height);

    @media (min-width: 768px) {
      --events-header-height: 250px;
      width: 50%;
      align-self: flex-start;
    }

    @media (min-width: 1600px) {
      --events-header-height: 350px;
    }
  }

  &__title {
    font-family: var(--events-title-font-face);
    font-size: var(--events-title-font-size);
    font-weight: var(--events-title-font-weight);
    margin-bottom: var(--events-margin);
  }

  &__body {
    font-family: var(--events-body-font-face);
    font-size: var(--events-body-font-size);
    font-weight: var(--events-body-font-weight);
    text-align: center;
    margin-bottom: var(--events-margin);
  }

  &__phone {
    font-family: var(--events-phone-font-face);
    font-size: var(--events-phone-font-size);
    font-weight: var(--events-phone-font-weight);
    position: relative;

    &::after {
      content: '';
      display: block;
      width: 70%;
      height: 1.5px;
      background: var(--events-phone-underline-color);
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
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
      width: 700px;
      height: 400px;
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
}
.event {
  margin-top: var(--space-md);
}

.nav-button {
  position: fixed;
  bottom: var(--space-lg);
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  // display: inline-flex;
  white-space: nowrap;

  @media (min-width: 736px) {
    display: none;
  }
}
</style>
