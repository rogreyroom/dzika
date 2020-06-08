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
  --card-background: var(--pale-grey);
  --card-shadow: var(--shadow-light-glow-small);
  --card-padding: var(--space-sm);
  --card-margin: 5px;
  --card-title-font-face: var(--ff-primary);
  --card-title-font-size: var(--title-small);
  --card-title-font-weight: var(--fw-normal);
  --card-title-color: var(--black);
  --card-body-font-face: var(--secondary);
  --card-body-font-size: var(--body-small);
  --card-body-font-weight: var(--fw-normal);
  --card-body-color: var(--black);

  background: var(--card-background);
  box-shadow: var(--card-shadow);
  padding: var(--card-padding);
  margin: var(--card-margin);
  display: flex;
  flex-direction: column;
  text-align: center;

  &__title {
    font-family: var(--card-title-font-face);
    font-size: var(--card-title-font-size);
    font-weight: var(--card-title-font-weight);
    color: var(--card-title-color);
  }

  &__description {
    font-family: var(--card-body-font-face);
    font-size: var(--card-body-font-size);
    font-weight: var(--card-body-font-weight);
    color: var(--card-body-color);
  }

  &__dish-wrapper {
    --underline-color: var(--grey);

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-family: var(--card-body-font-face);
    font-size: var(--card-body-font-size);
    font-weight: var(--card-body-font-weight);
    color: var(--card-body-color);
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: -3px;
      background: var(--underline-color);
      width: 80%;
      height: 1px;
    }

    &:hover {
      --underline-color: var(--primary);
      &::after {
        width: 100%;
      }
    }
  }

  &__dish-size {
    font-style: italic;
  }

  &__dish-price {
    --card-body-font-weight: var(--fw-semibold);
  }
}
</style>
