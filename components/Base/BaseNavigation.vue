<template>
  <ul class="menu">
    <li
      v-for="(item, index) in navigation"
      :key="index"
      class="menu__item"
    >
      <nuxt-link
        :to="item.url"
        class="menu__button"
        exact
        exact-active-class="menu_button--active"
      >
        {{ item.title }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['navigation'])
  },
  created () {
  },
  methods: {
    checkRoute (item) {
      if (this.$route.fullPath === item) { return 'hide-me' }
    }
  }
}
</script>

<style lang="scss" scoped>
.menu {
  --navigation-button-font-face: var(--ff-secondary);
  --navigation-button-font-size: var(--body-normal);
  --navigation-button-font-weight: var(--fw-semibold);
  --navigation-button-color: var(--black);
  --navigation-button-outline-size: 0 0 0 4px;
  --navigation-button-outline-color: var(--secondary);

  list-style: none;
  margin: 0;
  padding: 0;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  background-image: linear-gradient(
    270deg,
    #f9f9fb 41.94%,
    rgba(251, 251, 251, 0.6) 100%
  );
  position: relative;
  z-index: 1;

  @media (min-width: 736px) {
    display: flex;
  }

  &__item {
    display: block;
    text-align: center;
    box-shadow: 0 4px 8px rgba(240, 240, 243, 0.6);
  }

  &__button {
    font-family: var(--navigation-button-font-face);
    font-size: var(--navigation-button-font-size);
    font-weight: var(--navigation-button-font-weight);
    color: var(--navigation-button-color);
    text-decoration: none;
    display: block;
    padding: 0.8rem 1.8rem;
    width: 275px;
    position: relative;
    transition: all 0.4s ease-out;

    &::before {
      content: '';
      background: none;
      width: 100%;
      height: 3px;
      position: absolute;
      top: 0;
      right: 0;
      transition: all 0.4s ease-out;
    }

    &:hover {
      --navigation-button-color: var(--primary);

      &::before {
        background: var(--primary);
        box-shadow: 0 -2px 10px;
      }
    }

    &:focus {
      outline: var(--navigation-button-outline-color);
      // box-shadow: var(--navigation-button-outline-size)
      //   var(--navigation-button-outline-color);
    }

    &:active,
    &--active {
      --navigation-button-color: var(--primary);
      box-shadow: inset -21px 21px 42px #e3e3e373, inset 21px -21px 42px #fff;
    }
  }
}
</style>
