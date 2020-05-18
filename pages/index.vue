<template>
  <div class="container">
    <div>
      <logo />
      <slogan />
      <social />
      <link-button />
      <page-footer />
      <page-menu />
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Header/Logo.vue'
import Slogan from '~/components/Header/Slogan.vue'
import Social from '~/components/Aside/Social.vue'
import LinkButton from '~/components/General/LinkButton.vue'
import PageFooter from '~/components/Footer/PageFooter.vue'
import PageMenu from '~/components/Navigation/PageMenu.vue'

export default {
  components: {
    Logo,
    Slogan,
    Social,
    LinkButton,
    PageFooter,
    PageMenu
  }
}
</script>

<style>
</style>
