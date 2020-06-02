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
        <picture class="events__imagewwwwww">
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
          <event
            :index="index + 1"
            :name="event_menu_name"
            :description="event_menu_description"
            :price="event_menu_price"
            :photo="event_menu_photo"
          />
          <!-- <section
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
          > -->
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
import Event from '~/components/Events/Event'

export default {
  components: {
    NavButton,
    Event
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
  bottom: 50px;
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

  &__header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: var(--spacing);

    @media (min-width: 768px) {
      width: 50%;
      align-self: flex-start;
    }
  }

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

      @media (min-width: 768px) {
        top: var(--spacing);
      }

      @media (min-width: 1024px) {
        top: calc(var(--spacing) / 2);
      }
    }
  }

  &__hero {
    display: none;
    // align-content: center;
    position: absolute;
    right: 0;
    top: 0;
    // max-width: 100%;
    width: 350px;
    height: 250px;

    // overflow: hidden;
    // border-radius: 0 0 0 100px;

    // z-index: -1;

    @media (min-width: 768px) {
      display: block;
    }

    @media (min-width: 1024px) {
      width: 450px;
      height: 300px;
    }
  }

  &__image {
    // object-fit: cover;
    // object-position: center;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
    border-radius: 0 0 0 120px;

    // box-shadow: 0px 2px 4px rgba(179, 179, 179, 0.5);
    filter: drop-shadow(0px 12px 24px rgba(179, 179, 179, 0.89));
  }
}
// .event {
//   display: flex;
//   flex-direction: column;

//   &__set {
//     // display: grid;
//     // grid-template-areas: 'section image';
//     // grid-template-columns: 1fr max(80px, min(300px, 500px));
//     margin-bottom: var(--spacing);
//   }

//   &__section {
//     grid-area: section;
//     display: flex;
//     flex-direction: column;
//     background: rgba(rgb(247, 247, 247), 1.2);
//     box-shadow: 0px 2px 4px rgba(179, 179, 179, 0.5);
//     padding: var(--spacing) var(--spacing) calc(var(--spacing) / 2)
//       var(--spacing);
//     margin-top: calc(var(--spacing) * 2);
//     margin-bottom: var(--spacing);
//     position: relative;

//     &::before {
//       content: attr(data-before-content);
//       // content: '1';
//       position: absolute;
//       top: -3rem;
//       left: 0;
//       font-family: $header-font;
//       font-size: 6rem;
//       color: $c-grey;
//     }
//   }

//   &__header {
//     font-family: $header-font;
//     font-size: $h4-fs;
//     font-weight: $fw-normal;
//     text-align: center;
//     margin: 0;
//     // margin-top: var(--spacing);
//   }

//   &__body {
//     font-size: $small-fs;
//     text-align: center;
//     margin: 0;
//     margin-top: calc(var(--spacing) / 2);
//   }

//   &__price {
//     font-family: $header-font;
//     font-size: $normal-fs;
//     color: $c-red;
//     margin: 0;
//     justify-self: flex-end;
//     align-self: flex-end;
//     margin-top: var(--spacing);
//     // margin: 0 calc(var(--spacing) / 2) calc(var(--spacing) / 2) 0;
//   }

//   &__image {
//     grid-area: image;
//     border: 5px solid $c-black;
//     max-width: 100%;
//     width: 100%;
//     max-height: 160px;
//     object-fit: cover;
//     box-shadow: 0px 6px 10px $c-grey;
//   }
// }
</style>
