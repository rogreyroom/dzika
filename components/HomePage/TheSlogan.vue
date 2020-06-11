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
.slogan {
  --slogan-title-font-face: var(--ff-secondary);
  --slogan-title-font-size: var(--body-small);
  --slogan-title-font-weight: var(--fw-normal);
  --slogan-title-margin: var(--space-md);
  --slogan-subtitle-font-face: var(--ff-primary);
  --slogan-subtitle-font-size: var(--title-small);
  --slogan-subtitle-font-weight: var(--fw-normal);
  --slogan-subtitle-shadow: var(--shadow-light-glow-small);

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  &__title {
    font-family: var(--slogan-title-font-face);
    font-size: var(--slogan-title-font-size);
    font-weight: var(--slogan-title-font-weight);
    margin: 0;
    margin-bottom: var(--slogan-title-margin);

    @media (min-height: 768px) {
      --slogan-title-font-size: var(--body-normal);
      --slogan-subtitle-font-size: var(--title-normal);
    }

    @media (min-width: 1024px) {
      --slogan-title-margin: var(--space-lg);
    }
  }

  &__sub-title {
    font-family: var(--slogan-subtitle-font-face);
    font-size: var(--slogan-subtitle-font-size);
    font-weight: var(--slogan-subtitle-font-weight);
    margin: 0;
    width: min-content;
    text-shadow: var(--slogan-subtitle-shadow);

    span {
      display: inline-block;
      width: max-content;
    }

    @media (min-width: 1024px) {
      --slogan-subtitle-font-size: var(--title-large);
    }
  }
}
</style>
