<template>
 <div v-show="props.isModal" :class="$style.wrapper">
    <p :class="$style.title">New board</p>
    
    <div :class="$style.field">
        <p>Board name</p>
        <input v-model="boardTitle" type="text" placeholder="new board..." />
    </div>
    
    <div :class="$style.buttons">
        <button @click="createBoard" :class="$style.createBtn">
            <p>Create board</p>
            <img src="/check.svg" />
        </button>
        <button @click="emit('changeModal')" :class="$style.cancelBtn">
            Cancel
        </button>
    </div>
 </div>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps(['isModal']);
const emit = defineEmits(['changeModal']);
import services from '@/services/index.js';

const boardTitle = ref('');
const errorMessage = ref('');

const createBoard = async () => {
    try {
        const result = await services.createNewBoard(boardTitle.value);
    } catch (err) {
        console.log(err.message);
    } finally {
        emit('changeModal');
        boardTitle.value = "";
    }
};

</script>

<style module>

.wrapper {
    background: #151515;
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 400px;
    color: white;
    padding: 16px;
    border-radius: 26px;
    border: 6px solid #333738;
}

.title {
    color: var(--color-2);
    opacity: 0.8;
    font-size: 18px;
}

.field > p {
    font-size: 12px;
    margin-bottom: 4px;
    opacity: 0.8;
}

.field > input {
    padding: 6px 12px;
    width: 100%;
    border-radius: 12px;
    outline: none;
    background: transparent;
    border: 2px solid var(--color-6);
    color: white;
    margin-top: 6px;
}

.buttons {
    display: flex;
    align-items: center;
    gap: 12px;
}

.createBtn {
    background: #35359c;
    padding: 6px 12px;
    color: white;
    font-size: 16px;
    display: flex;
    align-items: center;
    outline: none;
    border: transparent;
    cursor: pointer;
    border-radius: 12px;
    gap: 6px;
}

.createBtn > img {
    width: 18px;
    height: 18px;
}

.createBtn > p {
    font-size: 14px;
}


.cancelBtn {
    background: var(--color-6);
    padding: 6px 12px;
    color: white;
    font-size: 16px;
    border: transparent;
    cursor: pointer;
    background: var(--color-3);
    border-radius: 12px;
}


</style>