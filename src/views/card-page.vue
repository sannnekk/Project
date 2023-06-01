<template>
  <div>Card page {{ $route.params.id }}</div>
  <pre>
    {{ card.name }}
  </pre>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useCardsStore } from '../stores/cards'
import { ref } from 'vue'

const router = useRoute()
let id = router.params.id

const cardsStore = useCardsStore()

let card = cardsStore.getCard(id)

// Homework
// 1. Make this whole page
// 2. Some styles for it
// 3. Add a button to go back to the home page
</script>

<style scoped></style>
