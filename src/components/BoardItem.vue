<template>
 <div @click="handleBoardItem" :class=$style.wrapper>
    {{ props.content }}
 </div>
</template>

<script setup>
import {useCounterStore} from '@/stores/counter.js';
const props = defineProps(['content', 'boardId']);
const store = useCounterStore();
const handleBoardItem = () => {
    store.updateCurrentBoard(props.boardId);
};

</script>

<style module>

.wrapper {
    color: var(--color-2);
    padding: 8px 12px;
    transition: all .3s ease;
    border: 1px solid transparent;
    cursor: pointer;
    font-size: 14px;
    font-family: "Montserrat", sans-serif;
    font-width: bold;
    text-transform: capitalize;
    border: 2px solid transparent;
    border-radius: 12px;
}

.wrapper:hover {
    border: 2px solid blueviolet;
    border-radius: 12px;
}

</style>