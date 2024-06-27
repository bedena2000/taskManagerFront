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

  --color-3: #1f1b1b;
  --color-4: #506C64;
  --color-5: #77CBB9;
  --color-6: #75B8C8;
  --color-7: #CDD3D5;

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
  background: var(--color-3);
}
</style>
