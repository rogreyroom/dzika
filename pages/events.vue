<template>
  <main class="main">
    <section class="events">
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

      <section class="event">
        <div
          v-for="({event_menu_name, event_menu_description, event_menu_price, event_menu_photo}, index) in event_menu"
          :key="index"
          class="event__set"
        >
          <section
            :data-before-content="index + 1"
            class="event__section"
          >
            <h3 class="event__header">
              {{ event_menu_name }}
            </h3>
            <p class="event__body">
              {{ event_menu_description }}
            </p>
            <p class="event__price">
              {{ event_menu_price }}pln
            </p>
          </section>

          <img
            class="event__image"
            :src="event_menu_photo"
            :alt="`Zdjęcie przedstawiające zestaw ${event_menu_name}`"
          >
        </div>
      </section>
    </section>
    <div class="nav-button">
      <nav-button
        :title="getNavigationTitle"
        :url="url"
        class="button--radius button--shadow"
      />
    </div>
  </main>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import NavButton from '~/components/NavButton.vue'

export default {
  layout: 'main',
  components: {
    NavButton
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
.main {
  grid-area: main;
}

.nav-button {
  // background: aqua;
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  // display: flex;
  // height: 32px;
  // width: 65%;
  // position: fixed;
  // bottom: calc(var(--spacing) * 2);
  // z-index: 10;
  // left: 50%;
  // transform: translateX(-50%);
  // text-align: center;
  // border: 1px solid darkblue;
  // border-radius: 16px;
  // box-shadow: 0 0 1rem rgba(208, 42, 39, 0.65);

  // justify-content: center;
}

.events {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--spacing);

  &__title {
    font-size: $large-fs;
    font-family: $body-font;
    font-weight: $fw-semibold;
  }

  &__body {
    font-size: $small-fs;
    text-align: center;
  }

  &__phone {
    font-family: $header-font;
    font-size: $h4-fs;
    position: relative;

    &::after {
      content: '';
      display: block;
      width: 70%;
      height: 1.5px;
      background: $c-red;
      position: absolute;
      top: calc(var(--spacing) * 1.5);
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
.event {
  display: flex;
  flex-direction: column;

  &__set {
    // display: grid;
    // grid-template-areas: 'section image';
    // grid-template-columns: 1fr max(80px, min(300px, 500px));
    margin-bottom: var(--spacing);
  }

  &__section {
    grid-area: section;
    display: flex;
    flex-direction: column;
    background: rgba(rgb(247, 247, 247), 1.2);
    box-shadow: 0px 2px 4px rgba(179, 179, 179, 0.5);
    padding: var(--spacing) var(--spacing) calc(var(--spacing) / 2)
      var(--spacing);
    margin-top: calc(var(--spacing) * 2);
    margin-bottom: var(--spacing);
    position: relative;

    &::before {
      content: attr(data-before-content);
      // content: '1';
      position: absolute;
      top: -3rem;
      left: 0;
      font-family: $header-font;
      font-size: 6rem;
      color: $c-grey;
    }
  }

  &__header {
    font-family: $header-font;
    font-size: $h4-fs;
    font-weight: $fw-normal;
    text-align: center;
    margin: 0;
    // margin-top: var(--spacing);
  }

  &__body {
    font-size: $small-fs;
    text-align: center;
    margin: 0;
    margin-top: calc(var(--spacing) / 2);
  }

  &__price {
    font-family: $header-font;
    font-size: $normal-fs;
    color: $c-red;
    margin: 0;
    justify-self: flex-end;
    align-self: flex-end;
    margin-top: var(--spacing);
    // margin: 0 calc(var(--spacing) / 2) calc(var(--spacing) / 2) 0;
  }

  &__image {
    grid-area: image;
    border: 5px solid $c-black;
    max-width: 100%;
    width: 100%;
    max-height: 160px;
    object-fit: cover;
    box-shadow: 0px 6px 10px $c-grey;
  }
}
</style>
