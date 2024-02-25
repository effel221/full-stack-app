<script setup lang="ts">
  import {useSearchInfoStore} from "@/stores/searchInfoStore";
  import {storeToRefs} from "pinia";

  const searchInfoStore = useSearchInfoStore()
  const { result } = storeToRefs(searchInfoStore)
</script>

<template>
  <div class="activities-component">
    <h3>Activites</h3>
    <div v-for="activity in result?.getActivitiesBySearch" :key="activity.id" class="activities-component-item">
      <h4>{{activity.title}} <span class="activities-component-item-offer" v-if="activity.specialOffer">Special Offer!!!</span></h4>
      <p><strong>Price:</strong> {{activity.price}}</p>
      <p><strong>Rating:</strong> {{activity.rating}}</p>
      <p v-if="activity.supplierName"><strong>Supplier Name:</strong> {{activity.supplierName}}</p>
      <p v-if="activity.supplierLocation"><strong>Supplier location:</strong> {{activity.supplierLocation}}</p>
    </div>
  </div>
</template>

<style scoped>
.activities-component {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
}
.activities-component h3 {
  margin: 20px 0 30px;
  color: #1d2044;
  font-size: 28px;
  font-weight: bold;
}
.activities-component-item {
  width: 70%;
  padding: 10px 25px;
  box-sizing: border-box;
  border: 2px solid #FFA488;
  border-radius: 20px;
  margin-bottom: 10px;
  font-size: 16px;
}
.activities-component-item h4 {
  display: flex;
  font-size: 20px;
  margin: 0 0 5px;
  font-weight: bold;
}
.activities-component-item strong {
  font-weight: bold;
  color: #495194;
}
.activities-component-item-offer {
  color: #F2A09F;
  margin-left: auto;
}
</style>
