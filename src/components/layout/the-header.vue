<template>
  <header class="header">
    <div class="container header__row">
      <div class="header__logo">
        <router-link to="/">
          <h1>Mark's Website</h1>
        </router-link>
      </div>
      <nav class="header__nav">
        <router-link to="/">Home</router-link>
        <router-link to="/learn-list">Learn list</router-link>
      </nav>
    </div>
  </header>
</template>

<script setup></script>

<style scoped>
.header {
  background-color: var(--accent);
  padding: 10px 0;
}
.header__row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header__logo a {
  text-decoration: none;
  color: var(--accent-contrast);
}
.header__logo h1 {
  font-weight: 100;
}
.header__logo h1::first-letter {
  color: var(--text-1);
  font-weight: 700;
  font-size: 1.2em;
}
.header__nav {
  display: flex;
  gap: 10px;
}
.header__nav a {
  text-decoration: none;
  color: var(--accent-contrast);
}
.header__nav a:hover {
  color: var(--text-3);
}
</style>
