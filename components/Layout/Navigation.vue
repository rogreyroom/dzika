<template>
  <ul class="menu">
    <!-- <div
      v-for="(item, index) in navigation"
      :key="index"

      :class="checkRoute(item.url)"
    > -->
    <li
      v-for="(item, index) in navigation"
      :key="index"
      class="menu__item"
    >
      <nav-link
        :title="item.title"
        :url="item.url"
        class="menu__link"
      />
    </li>
    <!-- </div> -->
  </ul>
</template>

<script>
import { mapState } from 'vuex'
import NavLink from '~/components/Home/Navigation/NavLink.vue'

export default {
  components: {
    NavLink
  },
  data () {
    return {
      nav: []
    }
  },
  computed: {
    ...mapState(['navigation'])
  },
  created () {
    // eslint-disable-next-line no-console
    // console.log(this.$route.fullPath)
    // this.$route.fullPath === '/menu'
    //   ? this.nav = this.navigation.filter(({ url }) => url === '/events')
    //   : this.nav = this.navigation.filter(({ url }) => url === '/menu')
  },
  methods: {
    checkRoute (item) {
      if (this.$route.fullPath === item) { return 'hide-me' }
    }
  }
}
</script>

<style lang="scss" scoped>
// .menu {
//   margin: 0;
//   padding: 0;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   // background: aquamarine;
//   height: 70px;
//   width: 100%;
//   overflow: hidden;
//   // padding: calc(var(--spacing) * 2) 0;

//   display: none;
// }

// .menu__item {
//   display: block;
//   height: 32px;
//   width: 65%;

//   // width: 100%;
//   // line-height: 32px;
//   // background: var(--c-red);
//   // margin-bottom: 4px;
//   // border: 1px solid $c-red;
//   // transition: 0.5s ease;
// }

// .menu__item:hover {
//   background: none;
//   animation: pulse 1s;
//   box-shadow: 0 0 0 1.5rem rgba(252, 255, 255, 0.1);
// }

// .menu__item:hover .menu__link {
//   color: $c-red;
//   font-weight: $fw-semibold;
// }

// @keyframes pulse {
//   0% {
//     box-shadow: 0 0 0 0 $c-red;
//   }
// }

// .hide-me {
//   display: none;
//   background: orchid;
// }

// .menu__link {
//   justify-content: center;
//   border: 1px solid $c-red;
//   border-radius: 16px;
//   // height: 32px;
//   //   font-weight: $fw-normal;
//   //   line-height: 32px;
//   //   padding-left: 20px;
//   //   color: $c-white;
//   // box-shadow: 4px 4px 10px 1.5rem rgba(47, 31, 232, 0.9);
//   box-shadow: 0 0 1rem rgba(208, 42, 39, 0.65);
// }
</style>
