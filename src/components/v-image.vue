<template>
  <div class="v-image">
    <img :src="path" />
  </div>
</template>

<script setup>
const props = defineProps(['path'])
</script>

<style scoped>
.v-image {
  width: 100%;
}
img {
  width: 100%;
}
</style>
