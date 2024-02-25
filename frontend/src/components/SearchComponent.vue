<script setup lang="ts">
  import {useSearchInfoStore} from "@/stores/searchInfoStore";
  import {storeToRefs} from "pinia";

  const searchInfoStore = useSearchInfoStore()
  const { result, loading, searchTermValue } = storeToRefs(searchInfoStore)
</script>

<template>
  <div class="search-component">
    <div class="search-component-input-wrapper">
      <input class="search-component-input" v-model="searchTermValue"
             placeholder="Find activities ..."
             :disabled="loading" @change="store.loadData({searchTerm: searchTermValue})" />
      <button class="search-component-button" @click="searchInfoStore.loadData({searchTerm: searchTermValue})">Search</button>
    </div>
  </div>
</template>

<style scoped>
.search-component {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 280px;
  background: no-repeat url('../assets/images/playa.jpg');
  background-size: 100% auto;
}
.search-component h3 {
  color: #fdcd93;
  font-size: 26px;
}
.search-component-input-wrapper {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
}
.search-component-input {
  width: 80%;
  height: 40px;
  border: 3px solid #1d2044;
  font-size: 20px;
  padding: 0 0 0 20px;
}
.search-component-button {
  background: #1d2044;
  border: #1d2044;
  height: 40px;
  color: #f2a09f;
  font-size: 20px;
  cursor: pointer;
}
</style>
