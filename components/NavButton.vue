<template>
  <nuxt-link
    :to="url"
    class="button"
  >
    <span
      v-if="prepend"
      class="button__prepend"
    >
      {{ prepend }}
    </span>
    <span class="button__body">
      {{ title }}
    </span>
    <span
      v-if="append"
      class="button__append"
    >
      {{ append }}
    </span>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    prepend: {
      type: String,
      default: ''
    },
    append: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
// background: aqua;
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

.button {
  // reset
  text-decoration: none;
  // border: none;
  // background-color: transparent;
  // font-family: inherit;
  padding: 0;
  cursor: pointer;

  // display
  display: inline-flex;
  align-items: center;
  justify-content: center;

  // visual
  background-color: var(--c-button-bg);
  color: var(--c-button-text);
  border: 1px solid var(--c-button-border);

  // size
  padding: 0.088em 2.25em;
  // width: 100%;
  // min-height: 100%;
  min-width: 10ch;
  min-height: 44px;

  // text
  text-align: center;
  line-height: 1.1;

  // effects
  // transition: 220ms all ease-in-out;
  transition: 0.5s ease;

  &:hover {
    --c-button-text: #{$c-button-bg};
    --c-button-bg: #{$c-button-text};

    // background-color: $c-button-hover-bg;
    // background: $c-white;
    animation: pulse 1s;
    box-shadow: 0 0 0 1.5rem rgba(252, 255, 255, 0.1);

    // .button__body {
    //   color: $c-button-bg;
    // }
  }

  &:focus {
    outline: var(--c-button-bg);
    box-shadow: 0 0 0 4px var(--c-button-outline);
  }

  &:active {
    --c-button-text: #{$c-button-bg};
    --c-button-bg: #{$c-button-text};
  }

  &--radius {
    border-radius: 22px;
  }

  &--shadow {
    box-shadow: 0 0 1rem rgba(208, 42, 39, 0.65);
  }

  &__body {
    display: block;
    font-family: $body-font;
    font-size: $normal-fs;
  }

  &__prepend {
    display: block;
    margin-right: 0.5em;
  }
  &__append {
    display: block;
    margin-left: 0.5em;
  }
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 $c-button-bg;
  }
}
</style>
