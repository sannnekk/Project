<template>
  <div class="learn-list-page">
    <main class="container">
      <h1>Лист для вивчення</h1>
      <v-list :items="learningStore.addedCards" @remove="learningStore.removeItem()" />
    </main>
  </div>
</template>

<script setup>
import { useLearningStore } from '../stores/learningStore'

const learningStore = useLearningStore()
</script>

<style lang="scss" scoped></style>
