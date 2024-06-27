<template>
 <div :class="$style.wrapper">
 
    <div :class="$style.options">
        <div :class="$style.optionItem">
            <div>
            
            </div>
            <p>
                Backlog
            </p>
        </div>
        
        <div :class="$style.optionItem">
            <div>
            
            </div>
            <p>
                In Progress
            </p>
        </div>
        
        <div :class="$style.optionItem">
            <div>
            
            </div>
            <p>
                In Review
            </p>
        </div>
        
        <div :class="$style.optionItem">
            <div>
            
            </div>
            <p>
                Completed
            </p>
        </div>
    </div>
    
    <div :class="$style.taskList">
        
        <div :class="$style.taskItem">
        
            <button :class="$style.addButton">
                <p>Add new task card</p>
                <img src="/plus.svg" alt="addCartButton">
            </button>
        </div>
        <div :class="$style.taskItem"></div>
        <div :class="$style.taskItem"></div>
        <div :class="$style.taskItem"></div>
    
    </div>
    
    
    <NewTask />
    
    
 
 </div>
</template>

<script setup>
import { ref } from 'vue';
import NewTask from '@/components/NewTask.vue';

const isModal = ref(false);

const changeIsModal = () => {
    isModal.value = isModal.value === true ? false : true;  
};

</script>

<style module>

.wrapper {
    width: 100%;
    background: #282828;
    margin: 20px;
    border-radius: 12px;
    padding: 20px;
    color: white;
}

.options {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}

.optionItem {
    display: flex;
    align-items: center;
    gap: 14px;
}

.optionItem > div {
    width: 12px;
    height: 12px;
    background-color: blue;
    border-radius: 100%;
}

.options > .optionItem:nth-child(1) > div {
    background-color: green;
}

.options > .optionItem:nth-child(2) > div {
    background-color: yellow;
}

.options > .optionItem:nth-child(3) > div {
    background-color: lightblue;
}

.options > .optionItem:nth-child(4) > div {
    background-color: brown;
}

.optionItem > p {
    font-size: 18px;
}

.taskList {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}

.addButton {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    padding: 8px 12px;
    border-radius: 18px;
    outline: none;
    border: none;
    background: var(--color-6);
    cursor: pointer;
    font-size: var(--font-itim);
    font-weight: 500;
    margin-top: 24px;
}

.addButton > img {
    width: 28px;
    height: 28px;
}

</style>