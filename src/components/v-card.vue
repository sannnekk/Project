<template>
  <div class="card">
    <div class="level">
      {{ level }}
    </div>
    <h2 class="name">
      {{ name }}
    </h2>
    <p class="description">
      {{ description }}
    </p>
  </div>
</template>

<script setup>
const props = defineProps(['name', 'description', 'level'])
</script>

<style scoped>
.card {
  background-color: #fff;
  border-radius: 0.25rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.2);
  padding: 1.25rem;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  width: 33.3%;
  box-sizing: border-box;
}
.name {
  display: inline-block;
  margin-top: 5px;
  margin-left: 10px;
  text-decoration: underline;
}
.level {
  float: left;
  border: 2px solid black;
  padding: 10px;
}
</style>
