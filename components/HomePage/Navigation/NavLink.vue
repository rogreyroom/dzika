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
// .button {
//   // reset
//   text-decoration: none;
//   // border: none;
//   // background-color: transparent;
//   // font-family: inherit;
//   padding: 0;
//   cursor: pointer;

//   // display
//   display: inline-flex;
//   align-items: center;
//   justify-content: flex-start;

//   // visual
//   background-color: $c-button-bg;
//   color: $c-button-text;
//   border: 1px solid $c-button-bg;

//   // size
//   padding: 0.25em var(--spacing);
//   width: 100%;
//   min-height: 100%;
//   // min-width: 10ch;
//   // min-height: 44px;

//   // text
//   text-align: left;
//   line-height: 1.1;

//   // effects
//   // transition: 220ms all ease-in-out;
//   transition: 0.5s ease;

//   &:hover {
//     // background-color: $c-button-hover-bg;
//     background: $c-white;
//     animation: pulse 1s;
//     box-shadow: 0 0 0 1.5rem rgba(252, 255, 255, 0.1);

//     .button__body {
//       color: $c-button-bg;
//     }
//   }

//   &:focus {
//     outline: $c-white;
//     box-shadow: 0 0 0 4px $c-button-hover-bg;
//   }

//   &:active {
//     background-color: $c-button-hover-bg;
//   }

//   &__body {
//     display: block;
//     font-family: $body-font;
//     font-size: $normal-fs;
//   }

//   &__prepend {
//     display: block;
//     margin-right: 0.5em;
//   }
//   &__append {
//     display: block;
//     margin-left: 0.5em;
//   }
// }

// @keyframes pulse {
//   0% {
//     box-shadow: 0 0 0 0 $c-button-bg;
//   }
// }
</style>
