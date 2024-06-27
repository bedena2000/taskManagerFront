<script setup>
import Options from '@/components/Options.vue';
import BoardDisplay from '@/components/BoardDisplay.vue';
</script>

<template>
  
  <div :class=$style.wrapper>
    <Options />
    <BoardDisplay />
  </div>



</template>

<style module>

.wrapper {
  display: flex;
  min-height: 100vh;
}

</style>