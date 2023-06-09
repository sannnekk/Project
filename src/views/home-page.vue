<template>
  <div class="home-page">
    <div class="home-page__banner">
      <div class="home-page__inner">
        <div class="container">
          <h1 class="home-page__header__title">Mark's Website</h1>
          <p>Теми з німецької мови для починаючих</p>
        </div>
      </div>
    </div>
    <main class="container">
      <page-title>Теми:</page-title>
      <div class="home-page__cards">
        <v-card
          v-for="card in learningStore.cards"
          :key="card.id"
          v-bind="card"
          :is-added-function="learningStore.isAdded"
          :toggle-function="learningStore.toggleItem"
        >
          <p>{{ card.description }}</p>
        </v-card>
      </div>
    </main>
  </div>
</template>

<script setup>
import { useLearningStore } from '../stores/learningStore'

const learningStore = useLearningStore()
</script>

<style scoped>
.cards {
  display: flex;
  flex-wrap: wrap;
}
.home-page__inner {
  height: 100%;
  background-color: #00000055;
  padding: 8rem 0;
  height: 440px;
}
.home-page__inner .container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.home-page__banner {
  background: url('../assets/header-bg.jpg') no-repeat center center / cover;
  color: var(--accent-contrast);
  text-align: center;
}
.home-page__header__title {
  font-size: 5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;
}
.home-page__cards {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
}
.home-page__cards > * {
  width: 33.333%;
}
@media screen and (max-width: 756px) {
  .home-page__header__title {
    font-size: 3rem;
  }
  .home-page__cards > * {
    width: 100%;
  }
}
</style>
