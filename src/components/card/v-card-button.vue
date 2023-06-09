<template>
  <component
    :is="!toggleText ? 'router-link' : 'button'"
    :to="to"
    :class="[position, isAddedFunction() ? 'toggled' : 'not-toggled']"
    class="card-button"
    @click.prevent="toggled = !toggled"
  >
    <span v-if="toggleText && toggled">{{ toggleText }}</span>
    <slot v-else />
  </component>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  to: {
    type: String,
    required: true
  },
  position: {
    type: String,
    default: 'left',
    // @ts-ignore
    validator: (value) => ['left', 'right'].includes(value)
  },
  toggleText: {
    type: String
  },
  isAddedFunction: {
    type: Function,
    default: () => false
  }
})

const toggled = ref(false)
</script>

<style scoped>
.card-button {
  cursor: pointer;
  border: none;
  background-color: var(--accent);
  color: var(--accent-contrast);
  border-radius: 0;
  padding: 1em;
  display: block;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  width: 50%;
}
.card-button.left {
  border-top-left-radius: 10px;
}
.card-button.right {
  border-bottom-right-radius: 10px;
}
.card-button.toggled {
  background-color: var(--text-2);
  color: var(--taccent-contrast);
}
.card-button:hover {
  background-color: var(--text-2);
}
</style>
