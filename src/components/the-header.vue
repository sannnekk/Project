<template>
  <div class="the-header">
    <the-titles class="titles"> </the-titles>
    <the-sidebar class="sidebar"> </the-sidebar>
  </div>
</template>

<script setup>
import theSidebar from './the-sidebar.vue'
import theTitles from './the-titles.vue'
</script>

<style scoped>
.the-header {
  display: flex;
}
.titles {
  width: 80%;
  background-color: rgb(222, 68, 12);
}
.sidebar {
  width: 20%;
  background-color: aqua;
}
</style>
