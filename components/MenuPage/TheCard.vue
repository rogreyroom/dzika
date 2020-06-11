<template>
  <section class="card">
    <h3 class="card__title">
      {{ title }}
    </h3>
    <p class="card__description">
      {{ description }}
    </p>
    <div class="card__dish-wrapper">
      <p class="card__dish-size">
        {{ size }}
      </p>
      <p class="card__dish-price">
        {{ price }}
      </p>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    },
    price: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  --card-background: var(--snow);
  --card-shadow: var(--shadow-light-glow-small);
  --card-padding: calc(var(--space-normal) + var(--space-xs)) var(--space-sm)
    calc(var(--space-normal) * 2.5) var(--space-sm);
  --card-margin: var(--space-sm);
  --card-title-font-face: var(--ff-secondary);
  --card-title-font-size: var(--title-extra-small);
  --card-title-font-weight: var(--fw-semibold);
  --card-title-color: var(--black);
  --card-title-margin: var(--space-sm);
  --card-body-font-face: var(--secondary);
  --card-body-font-size: var(--body-small);
  --card-body-font-weight: var(--fw-normal);
  --card-body-color: var(--black);
  --card-body-margin: var(--space-sm);
  --underline-color: var(--grey);

  background: var(--card-background);
  box-shadow: var(--card-shadow);
  padding: var(--card-padding);
  margin: var(--card-margin) auto;
  margin-bottom: calc(var(--card-margin) * 2);
  display: flex;
  flex-direction: column;
  text-align: center;
  max-width: 300px;
  width: 100%;

  transition: box-shadow 0.4s ease-in-out;

  &__title {
    font-family: var(--card-title-font-face);
    font-size: var(--card-title-font-size);
    font-weight: var(--card-title-font-weight);
    color: var(--card-title-color);
    margin-bottom: var(--card-title-margin);
  }

  &__description {
    font-family: var(--card-body-font-face);
    font-size: var(--card-body-font-size);
    font-weight: var(--card-body-font-weight);
    color: var(--card-body-color);
    margin-bottom: var(--card-body-margin);
  }

  &__dish-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-family: var(--card-body-font-face);
    font-size: var(--card-body-font-size);
    font-weight: var(--card-body-font-weight);
    color: var(--card-body-color);
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: -16px;
      background: var(--underline-color);
      width: 60%;
      height: 1px;
      transition: transform 0.6s ease-in-out;
    }
  }

  &__dish-size {
    margin-right: var(--card-body-margin);
  }

  &__dish-price {
    --card-body-font-weight: var(--fw-semibold);
    font-weight: var(--card-body-font-weight);
  }

  &:hover {
    .card__dish-wrapper::after {
      --underline-color: var(--primary);
      transform: scaleX(120%);
    }
    box-shadow: 8px 8px 12px #d5d5d5, -3px -3px 2px #fff;
  }
}
</style>
