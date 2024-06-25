import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {

  const isLoading = ref(false);

  const startLoading = () => isLoading.value = true;
  const endLoading = () => isLoading.value = false;

  return { isLoading, startLoading, endLoading }
})
