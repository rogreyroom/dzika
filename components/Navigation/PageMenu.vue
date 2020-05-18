<template>
  <ul class="menu">
    <li
      v-for="(item, index) in navigationArr"
      :key="index"
      class="menu__item"
    >
      <link-button
        :title="item.title"
        :link="item.link"
        class="menu__link"
      />
    </li>
  </ul>
</template>

<script>
import LinkButton from '~/components/General/LinkButton.vue'

export default {
  components: {
    LinkButton
  },
  props: {
    navigationArr: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }

}
</script>

<style lang="scss" scoped>
.menu {
  display: flex;
  flex-direction: column;
}

.menu__item {
  display: block;
  height: 32px;
  line-height: 32px;
  // background: var(--c-red);
  margin-bottom: 16px;
  border: 1px solid $c-red;
  transition: 0.5s ease;
}

.menu__item:hover {
  background: none;
  animation: pulse 1s;
  box-shadow: 0 0 0 1.5rem rgba(252, 255, 255, 0.1);
}

.menu__item:hover .menu__link {
  color: $c-red;
  font-weight: $fw-semibold;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 $c-red;
  }
}

.menu__link {
  font-weight: $fw-normal;
  line-height: 32px;
  padding-left: 20px;
  color: $c-white;
}
</style>
