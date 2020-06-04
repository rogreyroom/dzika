<template>
  <section class="slogan">
    <h1 class="slogan__title">
      {{ homeTitle }}
    </h1>
    <h3 class="slogan__sub-title">
      {{ ctaTitle }}
      <span>{{ ctaPhone }}</span>
    </h3>
  </section>
</template>

<script>
export default {
  props: {
    homeTitle: {
      type: String,
      default: ''
    },
    ctaTitle: {
      type: String,
      default: ''
    },
    ctaPhone: {
      type: [String, Number],
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
// .slogan {
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   margin-left: var(--spacing);
// }

// .slogan__title {
//   font-size: $normal-fs;
//   font-weight: $fw-normal;
//   margin: 0;
//   margin-bottom: 1.5rem;

//   @media (min-width: 1024px) {
//     margin-bottom: var(--spacing);
//   }
// }

// .slogan__sub-title {
//   font-family: $header-font;
//   font-size: $h3-fs;
//   font-weight: $fw-normal;
//   margin: 0;
//   width: min-content;
//   // text-shadow: 0px 2px 10px rgba(26, 23, 23, 0.25);
//   text-shadow: 0px 0px 10px rgba(26, 23, 23, 0.15);

//   span {
//     display: inline-block;
//     width: max-content;
//   }

//   @media (min-width: 1024px) {
//     font-size: $h1-fs;
//   }
// }
</style>
