<script setup lang="ts">
import SearchComponent from './components/SearchComponent.vue'
import ActivitiesComponent from "@/components/ActivitiesComponent.vue";
</script>

<template>
  <main>
    <header>
      <a href="/" class="logo">SUPER SITE</a>
    </header>
    <SearchComponent/>
    <ActivitiesComponent/>
  </main>
  <footer></footer>
</template>

<style scoped>
header {
  width: 100%;
  height: 106px;
  display: flex;
  place-items: center;
  padding-right: calc(var(--section-gap) / 2);
  background: #5F4F7B;
}

.logo {
  font-size: 43px;
  margin: 0 0 0 2rem;
  text-decoration: none;
  font-weight: bold;
  color: #fdcd93;
}
footer {
  width: 100%;
  height: 60px;
  background: #252335;
}
</style>
