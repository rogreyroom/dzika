<template>
  <div class="event__set">
    <section
      :data-before-content="index"
      class="event__section"
    >
      <h3 class="event__title">
        {{ name }}
      </h3>
      <p class="event__body">
        {{ description }}
      </p>
      <p class="event__price">
        {{ price }}pln
      </p>
    </section>
    <picture class="event__image-wrap">
      <img
        class="event__image"
        :src="photo"
        :alt="`Zdjęcie przedstawiające zestaw ${name}`"
      >
    </picture>
  </div>
</template>

<script>
export default {
  props: {
    index: {
      type: [String, Number],
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    price: {
      type: [String, Number],
      default: ''
    },
    photo: {
      type: String,
      default: ''
    }
  }

}
</script>

<style lang="scss" scoped>
.event {
  &__set {
    --event-title-font-face: var(--ff-primary);
    --event-title-font-size: var(--title-small);
    --event-title-font-weight: var(--fw-normal);

    --event-body-font-face: var(--ff-secondary);
    --event-body-font-size: var(--body-small);
    --event-body-font-weight: var(--fw-normal);
    --event-price-font-face: var(--ff-primary);
    --event-price-font-size: var(--title-extra-small);
    --event-price-font-weight: var(--fw-normal);
    --event-price-color: var(--primary);

    --event-set-margin: var(--space-lg);

    --event-section-pseudo-color: var(--dark-grey);
    --event-section-background: var(--snow);
    --event-section-padding: var(--space-lg) var(--space-normal) var(--space-sm)
      var(--space-normal);
    --event-section-margin: var(--space-lg) 0;
    // --event-section-shadow: var(--shadow-light-bottom);

    --event-section-shadow: 20px 20px 60px #d4d4d5, -20px -20px 60px #ffffff;

    --event-body-margin: var(--space-normal) 0;
    --event-image-border: 5px solid var(--black);

    // --event-image-shadow: 0px 6px 10px var(--dark-grey);

    --event-image-shadow: -20px -20px 60px #d4d4d5, 20px 20px 60px #ffffff;

    display: grid;
    grid-template-areas: 'section' 'image';
    grid-template-columns: minmax(auto, 400px);
    margin-bottom: var(--event-set-margin);

    @media (min-width: 768px) {
      grid-template-areas: 'section image';
      grid-template-columns: repeat(10, 1fr);
      align-items: center;
    }

    @media (min-width: 1024px) {
      grid-template-rows: repeat(6, 1fr);
    }
  }

  &__section {
    grid-area: section;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: var(--event-section-background);
    padding: var(--event-section-padding);
    margin: var(--event-section-margin);
    box-shadow: var(--event-section-shadow);
    transition: box-shadow 0.3s ease-in-out;
    z-index: 2;

    &::before {
      content: attr(data-before-content);
      position: absolute;
      top: -3rem;
      left: 3px;
      font-family: var(--event-title-font-face);
      font-size: 6rem;
      color: var(--event-section-pseudo-color);
      z-index: 2;
      transition: color 0.4s ease-in-out;
    }

    &:hover {
      --event-section-shadow: -20px -20px 60px #d4d4d5, 20px 20px 60px #ffffff;

      &::before {
        --event-section-pseudo-color: var(--primary);
      }

      + .event__image-wrap {
        --event-image-shadow: 20px 20px 60px #d4d4d5, -20px -20px 60px #ffffff;
        box-shadow: var(--event-image-shadow);
      }
    }

    @media (min-width: 768px) {
      grid-column: 2 / 6;
      grid-row: 1;
    }
    @media (min-width: 1024px) {
      grid-row: 2 / 6;
      margin: 0;
      align-self: start;
    }
  }

  &__title {
    font-family: var(--event-title-font-face);
    font-size: var(--event-title-font-size);
    font-weight: var(--event-title-font-weight);
  }

  &__body {
    font-family: var(--event-body-font-face);
    font-size: var(--event-body-font-size);
    font-weight: var(--event-body-font-weight);
    margin: var(--event-body-margin);
    text-align: center;
  }

  &__price {
    font-family: var(--event-price-font-face);
    font-size: var(--event-price-font-size);
    font-weight: var(--event-price-font-weight);
    color: var(--event-price-color);
    align-self: flex-end;
  }

  &__image-wrap {
    grid-area: image;
    width: 100%;
    height: 100%;
    box-shadow: var(--event-image-shadow);
    transition: box-shadow 0.3s ease-in-out, transform 0.7s ease-out;
    position: relative;
    z-index: 1;

    &::after {
      z-index: -1;
      position: absolute;
      content: '';
      bottom: 15px;
      right: 10px;
      left: auto;
      width: 50%;
      top: 80%;
      max-width: 300px;
      background: #777;
      box-shadow: 0 15px 10px #777;
      transform: rotate(3deg);
    }

    @media (min-width: 768px) {
      grid-column: 5 / 10;
      grid-row: 1;
    }

    @media (min-width: 1024px) {
      grid-row: 3 / 7;
      align-self: end;
    }
  }

  &__image {
    max-width: 100%;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
  }
}
</style>
