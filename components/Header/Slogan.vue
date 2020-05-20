<template>
  <section class="slogan">
    <h1 class="slogan__title">
      {{ title }}
    </h1>
    <h3 class="slogan__sub-title">
      <span>Głodny?
        Zadzwoń:
        <span>{{ phone }}</span>
      </span>
    </h3>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Smaczne miejsce dla rodzin!'
    },
    phone: {
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
  white-space: pre-line;
}
</style>
