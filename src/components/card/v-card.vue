<template>
  <div class="card">
    <div class="card__inner">
      <lang-level class="card__level" :level="level" />
      <div class="card__title">
        <h2>{{ title }}</h2>
      </div>
      <p class="card__text">
        <slot></slot>
      </p>
      <div class="card__buttons">
        <v-card-button :to="`/card/${id}`" position="left">Детальніше</v-card-button>
        <v-card-button
          :to="`/card/${id}`"
          :is-added-function="isAddedFunction"
          position="right"
          toggle-text="Прибрати з листа"
          @click="toggleFunction(id)"
        >
          До листа
        </v-card-button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  level: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true
  },
  toggleFunction: {
    type: Function,
    required: true
  },
  isAddedFunction: {
    type: Function,
    required: true
  }
})
</script>

<style scoped>
.card__inner {
  height: 100%;
  margin: 0.4em;
  border-radius: 10px;
  border: 1px solid var(--text-3);
  position: relative;
}
.card__level {
  float: left;
}
.card__text {
  height: 180px;
  padding: 0em 1.8em;
  color: var(--text-3);
}
.card__buttons {
  display: flex;
}
</style>
