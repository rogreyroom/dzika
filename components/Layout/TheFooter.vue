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
  --footer-font-face: var(--secondary);
  --footer-font-size: var(--body-info-small);
  --footer-font-weight: var(--fw-normal);
  --footer-text-color: var(--dark-grey);
  --footer-hover-text-color: var(--secondary-dark);
  --footer-link-outline-color: var(--secondary);
  --footer-link-outline-size: 0 0 0 4px;
  --footer-margin: 0 10px 5px 10px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 10px 5px 10px;

  &__text {
    font-family: var(--footer-font-face);
    font-size: var(--footer-font-size);
    font-weight: var(--footer-font-weight);
    color: var(--footer-text-color);
    margin: 0;
  }

  &__link {
    text-decoration: none;
    border: none;
    background-color: transparent;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    color: inherit;
    padding: 0;
    cursor: pointer;
    transition: 220ms all ease-in-out;

    &:hover {
      --footer-text-color: var(--footer-hover-text-color);
    }

    &:focus {
      outline: var(--footer-link-outline-color);
      box-shadow: var(--footer-link-outline-size)
        var(--footer-link-outline-color);
    }
  }
}
</style>
