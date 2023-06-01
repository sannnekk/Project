<template>
  <div class="page">
    <the-header> </the-header>
    <div class="cards">
      <v-card
        v-for="card in cardsStore.cards"
        :key="card.id"
        :name="card.name"
        :description="card.description"
        :level="card.level"
        @click="onCardClick(card.id)"
      ></v-card>
    </div>
  </div>
</template>

<script setup>
import theHeader from '../components/the-header.vue'
import vCard from '../components/v-card.vue'
import { useRouter } from 'vue-router'
import { useCardsStore } from '../store/cards'

const cardsStore = useCardsStore()

const router = useRouter()

function onCardClick(id) {
  router.push('/card/' + id)
}
</script>

<style scoped>
.cards {
  display: flex;
  flex-wrap: wrap;
}
</style>
