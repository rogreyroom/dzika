<template>
  <ul class="menu">
    <li
      v-for="(item, index) in navigation"
      :key="index"
      class="menu__item"
    >
      <base-button
        :title="item.title"
        :url="item.url"
        class="button--left-text button--full-width"
      />
    </li>
  </ul>
</template>

<script>
import { mapState } from 'vuex'
import BaseButton from '~/components/Base/BaseButton.vue'

export default {
  components: {
    BaseButton
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['navigation'])
  }
}
</script>

<style lang="scss" scoped>
.menu {
  --list-item-bottom-margin: var(--space-normal);
  --list-item-hover-shadow: 0 0 0 1.5rem var(--white-alpha);
  --list-item-outline-size: 0 0 0 4px;
  --list-item-outline-color: var(--secondary);

  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;

  &__item {
    display: block;
    margin-bottom: var(--list-item-bottom-margin);
    &:last-child {
      margin-bottom: 0;
    }

    &:hover {
      animation: pulse 1s;
      box-shadow: var(--list-item-hover-shadow);
    }
  }
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 var(--primary);
  }
}
</style>
