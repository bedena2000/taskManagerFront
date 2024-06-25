<template>
 <div :class="$style.wrapper">
    <h2>
        Your Boards
    </h2>
    
    <div :class=$style.boardList>
        <p v-if="boards.length === 0" :class="$style.message">You have no boads</p>
        
        <BoardItem
            v-for="board in boards.data"
            :content="board.title"
            :boardId="board.id"
        />
    </div>
    
    <button @click.prevent="changeIsModal" :class=$style.addBoard>
        <img src="/plus.svg" />
        <p>
            add board
        </p>
    </button>
    <NewBoard :is-modal="isModal" @changeModal="changeIsModal"  />
 </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import BoardItem from "@/components/BoardItem.vue";
import NewBoard from "@/components/NewBoard.vue";
import services from '@/services/index.js';

const isModal = ref(false);
const boards = ref([]);

const handleBoards = async () => {
    const result = await services.getBoards();
    console.log(result);
    boards.value = result;
};

onMounted(() => {
   handleBoards(); 
});

const changeIsModal = () => {
    if(isModal.value) {
        handleBoards()
    };
    isModal.value = !isModal.value;
};

</script>

<style module>

.wrapper {
    background: var(--color-3);
    padding: 12px 16px;
    color: var(--color-2);
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    width: 300px;
}

.boardList {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.wrapper > h2 {
    text-align: center;
    margin-bottom: 24px;
    font-family: "Montserrat", sans-serif;
}

.addBoard {
    display: flex;
    align-items: center;
    gap: 12px;
    background: var(--color-5);
    border: none;
    cursor: pointer;
    margin-top: 24px;
    border-radius: 12px;
    padding: 6px 12px;
    font-family: "Montserrat", sans-serif;
    width: 100%;
    transition: all .3s ease;
}

.addBoard > img {
    width: 24px;
    height: 24px;
}

.addBoard:hover {
    
}



</style>