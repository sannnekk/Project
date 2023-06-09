<template>
  <div class="card-page">
    <main class="container">
      <h1>{{ card.title }}</h1>
      <p v-html="card.fullDescription"></p>
    </main>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useLearningStore } from '../stores/learningStore'
import { useRoute } from 'vue-router'

const route = useRoute()
const learningStore = useLearningStore()
const card = computed(() => learningStore.get(route.params.id))
</script>

<style scoped></style>
