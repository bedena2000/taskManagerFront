<script setup>
import Options from '@/components/Options.vue';
</script>

<template>
  
  <div :class=$style.wrapper>
    <Options />
  </div>



</template>

<style module>

.wrapper {
  display: flex;
  min-height: 100vh;
}

</style>