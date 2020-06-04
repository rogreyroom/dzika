<template>
  <main class="main">
    <section class="menu">
      <h2 class="menu__title">
        Nasze manu
      </h2>
      <p class="menu__subtitle">
        Zapraszamy na smaczne potrawy wykonane z :heart przez Szefa Kuchni.
      </p>

      <section class="menu__body">
        <ul class="food">
          <li class="food__item">
            <!-- TODO: here add button with name of menu category eg. Pizza -->
            <!-- It can be a component and it schould be a unordered list - some kind of carousel-->
            <button class="food__button">
              <h3 class="food__name" />
              <p class="food__description" />
              <p class="food__size" />
              <p class="food__price" />
            </button>
          </li>
        </ul>
      </section>
    </section>
  </main>
</template>

<script>
export default {

}
</script>

<style>
/* .main {
  grid-area: main;
} */
</style>
