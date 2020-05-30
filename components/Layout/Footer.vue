<template>
  <footer class="footer">
    <p class="footer__text">
      <a
        href="mailto:www@dzikaroza.com.pl"
        class="footer__link"
      >
        &copy; Restauracja Dzika Róża
      </a>
    </p>
    <p class="footer__text">
      <a
        href="mailto:www@adamczewski.me"
        class="footer__link"
      >Robert Adamczewski</a>
    </p>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.footer {
  // bottom: 0;
  // grid-area: footer;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 10px 5px 10px;

  &__text {
    font-family: $body-font;
    font-size: $small-fs;
    color: $c-grey;
    margin: 0;
  }

  &__link {
    text-decoration: none;
    border: none;
    background-color: transparent;
    font-family: inherit;
    padding: 0;
    cursor: pointer;

    color: $c-grey;
    transition: 220ms all ease-in-out;

    &:hover,
    &:focus {
      color: $c-black;
    }
  }
}
</style>
