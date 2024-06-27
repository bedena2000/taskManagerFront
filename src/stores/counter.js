import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {

  const isLoading = ref(false);
  const currentBoard = ref(null);

  const startLoading = () => isLoading.value = true;
  const endLoading = () => isLoading.value = false;
  const updateCurrentBoard = (newBoard) => currentBoard.value = newBoard;

  return {
    isLoading,
    currentBoard,
    startLoading,
    endLoading,
    updateCurrentBoard
  }
})
