<template>
  <div class="level" :class="level.toLowerCase()">
    <span>{{ level }}</span>
  </div>
</template>

<script setup>
defineProps({
  level: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.level {
  background-color: var(--accent-2);
  padding: 0.3em;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
  font-weight: 900;
  color: var(--accent-contrast);
}
.level.a1 {
  background-color: #16a800;
}
.level.a2 {
  background-color: #96dc00;
}
.level.b1 {
  background-color: #ccc500;
}
.level.b2 {
  background-color: #d2aa09;
}
.level.c1 {
  background-color: #f76700;
}
.level.c2 {
  background-color: #ff0000;
}
</style>
