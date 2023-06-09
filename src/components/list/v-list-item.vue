<template>
  <div class="list-item">
    <div class="list-item__level">
      <lang-level :level="level" />
    </div>
    <div class="list-item__title">
      <router-link :to="`/card/${id}`">{{ title }}</router-link>
    </div>
    <div class="list-item__actions">
      <v-button @click="$emit('remove', id)">Видалити</v-button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  id: {
    type: String
  },
  level: {
    type: String
  },
  title: {
    type: String
  }
})
</script>

<style scoped>
.list-item {
  margin: 0.5em 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.list-item__title {
  flex: 1;
  padding-left: 2em;
}
.list-item__title a {
  text-decoration: none;
  color: var(--text-1);
}
.list-item__title a:hover {
  text-decoration: underline;
}
</style>
