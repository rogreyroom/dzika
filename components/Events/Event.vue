<template>
  <div class="event__set">
    <section
      :data-before-content="index"
      class="event__section"
    >
      <h3 class="event__header">
        {{ name }}
      </h3>
      <p class="event__body">
        {{ description }}
      </p>
      <p class="event__price">
        {{ price }}pln
      </p>
    </section>
    <img
      class="event__image"
      :src="photo"
      :alt="`Zdjęcie przedstawiające zestaw ${name}`"
    >
  </div>
</template>

<script>
export default {
  props: {
    index: {
      type: String,
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
      type: String,
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
  display: flex;
  flex-direction: column;

  &__set {
    // display: grid;
    // grid-template-areas: 'section image';
    // grid-template-columns: 1fr max(80px, min(300px, 500px));
    // margin-bottom: var(--spacing);
    margin-top: calc(var(--spacing) * 2);
    margin-bottom: var(--spacing);

    @media (min-width: 768px) {
      display: grid;
      // grid-template-areas: 'section image';
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: 1fr;
      align-items: center;
    }
  }

  &__section {
    // grid-area: section;
    display: flex;
    flex-direction: column;
    background: rgba(rgb(247, 247, 247), 1.2);
    box-shadow: 0px 2px 4px rgba(179, 179, 179, 0.5);
    padding: var(--spacing) var(--spacing) calc(var(--spacing) / 2)
      var(--spacing);

    // border: 1px solid hsla(1, 68%, 48%, 0.61);
    // outline: 15px solid rgba(rgb(247, 247, 247), 0);

    position: relative;

    &::before {
      content: attr(data-before-content);
      // content: '1';
      position: absolute;
      top: -3rem;
      left: 0;
      font-family: $header-font;
      font-size: 6rem;
      color: $c-grey;
      z-index: 2;
    }

    // &::after {
    //   content: ' ';
    //   position: absolute;
    //   z-index: -1;
    //   top: 5px;
    //   left: 5px;
    //   right: 5px;
    //   bottom: 5px;
    //   border: 1px solid $c-red;
    //   z-index: 1;
    // }

    @media (min-width: 768px) {
      grid-column: 1 / 3;
      grid-row: 1;

      // margin: 0;
    }
  }

  &__header {
    font-family: $header-font;
    font-size: $h4-fs;
    font-weight: $fw-normal;
    text-align: center;
    margin: 0;
    // margin-top: var(--spacing);
  }

  &__body {
    font-size: $small-fs;
    text-align: center;
    margin: 0;
    margin-top: calc(var(--spacing) / 2);

    @media (min-width: 768px) {
      font-size: $normal-fs;
    }
  }

  &__price {
    font-family: $header-font;
    font-size: $normal-fs;
    color: $c-red;
    margin: 0;
    justify-self: flex-end;
    align-self: flex-end;
    margin-top: var(--spacing);
    // margin: 0 calc(var(--spacing) / 2) calc(var(--spacing) / 2) 0;

    @media (min-width: 768px) {
      font-size: $large-fs;
    }
  }

  &__image {
    // grid-area: image;
    border: 5px solid $c-black;
    max-width: 100%;
    width: 100%;
    // max-height: 160px;
    object-fit: cover;
    box-shadow: 0px 6px 10px $c-grey;

    margin-top: var(--spacing);

    @media (min-width: 768px) {
      grid-column: 2 / 5;
      grid-row: 1;
      margin: 0;
    }
  }
}
</style>
