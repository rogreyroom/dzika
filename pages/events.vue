<template>
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
        <h3 class="event__header">
          {{ event_menu_name }}
        </h3>
        <p class="event__body">
          {{ event_menu_description }}
        </p>
        <p class="event__price">
          {{ event_menu_price }}
        </p>
        <img
          class="event__image"
          :src="event_menu_photo"
          :alt="`Zdjęcie przedstawiające zestaw ${event_menu_name}`"
        >
      </div>
    </section>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['events_page_title', 'events_phone_number', 'event_menu']),
    ...mapState({
      events_text: state => state.eventsPage.events_text
    })
  }

}
</script>

<style lang="sass" scoped>
.events
&__title
&__body
&__phone

.event
&__set
&__header
&__body
&__price
&__image
</style>
