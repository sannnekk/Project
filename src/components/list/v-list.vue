<template>
  <div class="v-list">
    <div class="v-list__empty" v-if="items.length < 1">Поки що пусто</div>
    <v-list-item
      v-for="item in items"
      :key="item.id"
      v-bind="item"
      @remove="$emit('remove', item.id)"
    />
  </div>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    default: []
  }
})

defineEmits(['remove'])
</script>

<style scoped></style>
