<script setup></script>

<template>
  <the-header />
  <router-view />
  <the-footer />
</template>

<style>
html,
body {
  padding: 0;
  margin: 0;
  font-family: 'Roboto', sans-serif;
}
* {
  box-sizing: border-box;
}
:root {
  --accent: #ff9800;
  --accent-2: #007504;
  --accent-contrast: #fff;
  --text-1: #333;
  --text-2: #888;
  --text-3: #bbb;
}
.container {
  max-width: min(1110px, 100%);
  margin: 0 auto;
}
@media screen and (max-width: 768px) {
  .container {
    padding: 0 10px;
  }
}
</style>
