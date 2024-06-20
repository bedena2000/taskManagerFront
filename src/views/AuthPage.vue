<template>
  <div :class="$style.wrapper">
    <img :class="$style.topLeft" src="/top-left.png" alt="backgroundImage" />
    <img :class="$style.topRight" src="/top-right.png" alt="backgroundImage" />
    <img
      :class="$style.bottomLeft"
      src="/bottom-left.png"
      alt="backgroundImage"
    />
    <img
      :class="$style.bottomRight"
      src="/bottom-right.png"
      alt="backgroundImage"
    />

    <Login />
  </div>
</template>

<script setup>
import Login from "@/components/Login.vue";
</script>

<style module>
.wrapper {
  min-height: 100vh;
  background-color: var(--color-1);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.topLeft {
  position: absolute;
  left: 0px;
  top: 0px;
}

.topRight {
  position: absolute;
  right: 0px;
  top: 0px;
}

.bottomLeft {
  position: absolute;
  left: 0px;
  bottom: 0px;
}

.bottomRight {
  position: absolute;
  right: 0px;
  bottom: 0px;
}

@media (max-width: 768px) {
  .topLeft,
  .topRight,
  .bottomLeft,
  .bottomRight {
    display: none;
  }
}
</style>
