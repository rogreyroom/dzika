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
.button {
  --button-background: var(--primary);
  --button-hover-background: var(--white);
  --button-active-background: var(--primary-dark);
  --button-font-face: var(--ff-secondary);
  --button-font-size: var(--body-small);
  --button-font-weight: var(--fw-normal);
  --button-text-color: var(--white);
  --button-hover-text-color: var(--primary);
  --button-active-text-color: var(--white);
  --button-min-width: 10ch;
  --button-min-height: 34px;
  --button-padding: 0.088em var(--space-normal);
  --button-padding-extra: 0.1em var(--space-lg);
  --button-border-size: 1px solid;
  --button-border-radius: 22px;
  --button-border-color: var(--primary);
  --button-outline-size: 0 0 0 4px;
  --button-outline-color: var(--secondary);
  --button-shadow: 0 0 1rem var(--primary-alpha);
  --button-hover-shadow: 0 0 0 1.5rem var(--white-alpha);
  --button-transition: 0.5s ease;
  --button-hover-animation: pulse 1s;

  @media (min-width: 786px) {
    --button-font-size: var(--body-normal);
    --button-padding: 0.088em var(--space-normal);
    --button-padding-extra: 0.1em var(--space-xl);
  }

  text-decoration: none;
  padding: 0;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: var(--button-background);
  border: var(--button-border-size) var(--button-border-color);
  color: var(--button-text-color);
  min-width: var(--button-min-width);
  min-height: var(--button-min-height);
  padding: var(--button-padding);
  text-align: center;
  line-height: 1.1;
  transition: var(--button-transition);
  flex-shrink: 0;

  &:hover {
    --button-background: var(--button-hover-background);
    --button-text-color: var(--button-hover-text-color);

    animation: var(--button-hover-animation);
    box-shadow: var(--button-hover-shadow);
  }

  &:focus {
    outline: var(--button-outline-color);
    box-shadow: var(--button-outline-size) var(--button-outline-color);
  }

  &:active {
    --button-background: var(--button-active-background);
    --button-text-color: var(--button-active-text-color);
  }

  &--radius {
    border-radius: var(--button-border-radius);
  }

  &--shadow {
    box-shadow: var(--button-shadow);
  }

  &--left-text {
    justify-content: flex-start;
  }

  &--extra-size {
    padding: var(--button-padding-extra);
  }

  &--full-width {
    width: 100%;
  }

  &__body {
    display: block;
    font-family: var(--button-font-face);
    font-size: var(--button-font-size);
    font-weight: var(--button-font-weight);
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
    box-shadow: 0 0 0 0 var(--button-background);
  }
}
</style>
