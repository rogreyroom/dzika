<template>
  <header class="header">
    <h2 class="header__title">
      {{ title }}
    </h2>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  --header-background: var(--primary);
  --header-title-font-face: var(--ff-primary);
  --header-title-font-size: var(--title-small);
  --header-title-font-weight: var(--fw-normal);
  --header-title-color: var(--white);
  --header-padding: var(--space-sm);
  --header-margin: var(--space-sm);

  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--header-background);
  max-width: 320px;
  width: 100%;
  padding: var(--header-padding);
  margin: 0 auto;
  margin-bottom: var(--header-margin);
  line-height: 1.1;

  &__title {
    font-family: var(--header-title-font-face);
    font-size: var(--header-title-font-size);
    font-weight: var(--header-title-font-weight);
    color: var(--header-title-color);
  }
}
</style>
