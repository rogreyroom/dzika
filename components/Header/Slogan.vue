<template>
  <section class="slogan">
    <h1 class="slogan__title">
      {{ homeTitle }}
    </h1>
    <h3 class="slogan__sub-title">
      {{ ctaTitle }}
      <span>{{ ctaPhone }}</span>
      <!-- <span>
        Głodny? Zadzwoń:
        <span>{{ cta-phone }}</span>
      </span> -->
    </h3>
  </section>
</template>

<script>
export default {
  props: {
    homeTitle: {
      type: String,
      default: 'Smaczne miejsce dla rodzin!'
    },
    ctaTitle: {
      type: String,
      default: 'Głodny? Zadzwoń:'
    },
    ctaPhone: {
      type: [String, Number],
      default: '32 415 77 19'
    }
  }
}
</script>

<style lang="scss" scoped>
.slogan {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.slogan__title {
  font-size: $normal-fs;
  font-weight: $fw-normal;
  margin: 0;
  margin-bottom: 1.5rem;
}

.slogan__sub-title {
  font-family: $header-font;
  font-size: $h3-fs;
  font-weight: $fw-normal;
  margin: 0;
  width: min-content;

  span {
    display: inline-block;
    width: max-content;
  }
}
</style>
