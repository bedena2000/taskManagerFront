<template>
  <div>
    <RouterView />
  </div>
</template>

<script setup></script>

<style>
:root {
  /* colors */
  --color-1: #000000;
  --color-2: #FFFFFF;

  --btn-color-1: #1A7FC1;

  /* fonts */
  --font-itim: "Itim", cursive;

  /* Media Colors */
  --media-mobile: 320px;
  --media-mobile-m: 375px;
  --media-mobile-l: 425px;
  --media-tablet: 768px;
  --media-laptop: 1024px;
  --media-laptop-l: 1440px;
  --media-4k: 2560px; 
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--font-itim);
}
</style>
