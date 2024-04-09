<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script setup>
import HomeView from "./HomeView.vue";
import { ref } from "vue";

let test = ref("");

const fun = () => {
  if (true) {
    return;
  }
  let a = 1;
  let b = 2;
  console.log(a + b);
};
</script>
