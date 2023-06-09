<template>
  <button class="button">
    <slot />
  </button>
</template>

<style scoped>
.button {
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border: none;
  background-color: var(--accent);
  color: var(--accent-contrast);
  font-weight: bold;
  padding: 0.6em 1em;
  cursor: pointer;
}
.button:hover {
  background-color: var(--text-1);
}
</style>
