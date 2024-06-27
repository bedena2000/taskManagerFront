<template>

    <div :class="$style.wrapper">
    
        <p :class="$style.title">
            Task details
        </p>
    
        <div :class="$style.taskName">
            <p>Task name</p>
            <input v-model="taskTitle" type="text">
            
        </div>
        
        <div :class="$style.status">
            <p :class="$style.statusTitle">Status</p>
            <div @click="changeIsModal" :class="$style.statusMain">{{ curretModalValue }}</div>
            
            <div v-if="isModal" :class="$style.statusWrapper">
                <div @click="updateModal('Backlog')" :class="$style.Backlog">Backlog</div>
                <div @click="updateModal('InProgress')" :class="$style.InProgress">InProgress</div>
                <div @click="updateModal('InReview')" :class="$style.InReview">InReview</div>
                <div @click="updateModal('Completed')" :class="$style.Completed">Completed</div>
            </div>
        
        </div>
        
        <div :class="$style.tags">
            <p :class="$style.tagTitle">Tags</p>
            
            <div :class="$style.tagList">
                <ul>
                    <li v-for="tag in tags" :key="tag">
                        {{ tag }}
                        <span @click="removeTag(tag)">x</span>
                    </li>
                </ul>
                <input v-model="newTag" @keyup.enter="updateTag" placeholder="New tag" type="text" :class="$style.tagInput">
                
            </div>
            <p :class="$style.maxTag">
                maximum number of tags: 5
            </p>
            
        </div>
        
        <div :class="$style.buttons">
            <button>
                <p>Save</p>
                <img src="/check.svg" />
            </button>
            <button>
                Cancel
            </button>
        </div>
        
    
    </div>


</template>

<script setup>

import { ref } from 'vue';
const taskTitle = ref('');
const isModal = ref(false);
const curretModalValue = ref('Backlog');
const tags = ref([]);
const newTag = ref('');
const maxTagNumber = ref(0);

const changeIsModal = () => isModal.value = !isModal.value;
const updateModal = (newModalValue) => {
    curretModalValue.value = newModalValue;
    isModal.value = false;
};

const updateTag = () => {
    if(newTag.value.trim() && maxTagNumber.value < 5 && !tags.value.includes(newTag.value.trim())) {
        tags.value = [
            ...tags.value,
            newTag.value
        ];
        newTag.value = "";
        maxTagNumber.value = maxTagNumber.value + 1;
    };
};

const removeTag = (currentTag) => {
    tags.value = tags.value.filter(item => item !== currentTag);
    maxTagNumber.value = maxTagNumber.value - 1;
};

</script>

<style module>

.wrapper {
    display: flex;
    flex-direction: column;
    gap: 8px;
    background: #151515;
    border: 6px solid #333738;
    padding: 12px;
    border-radius: 24px;
    width: 500px;
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.title {
    font-size: 18px;
}

.statusTitle {
    font-size: 14px;
    opacity: 0.5;
    margin-bottom: 4px;
}

.taskName > p {
    opacity: 0.5;
    font-size: 14px;
    margin-bottom: 4px;
}

.tagTitle {
    opacity: 0.5;
    font-size: 14px;
    margin-bottom: 4px;
}

.taskName > input {
    border-radius: 6px;
    padding: 4px 12px;
    outline: none;
    background: transparent;
    border: 2px solid rgba(117,184,200, 0.1);
    color: rgba(255, 255, 255, 0.5);
    font-family: var(--font-init);
}

.tagList {
    border-radius: 6px;
    padding: 4px 12px;
    outline: none;
    background: transparent;
    border: 2px solid rgba(117,184,200, 0.1);
    color: rgba(255, 255, 255, 0.5);
    font-family: var(--font-init);
    cursor: pointer;
    display: flex;
    gap: 12px;
    aling-items: center;
}

.tagInput {
    background: transparent;
    padding: 0px 4px;
    width: 100%;
    outline: none;
    border: none;
    color: white;
    font-family: var(--font-init);
    font-size: 16px;
}

.tagList > ul {
    display: flex;
    gap: 12px;
}

.tagList > ul > li {
    list-style-type: none;
    background: #868686;
    color: black;
    border-radius: 12px;
    padding: 4px 8px;
    white-space: nowrap;
}

.status {
    width: 100%;
    position: relative;
}

.statusWrapper {
    display: flex;
    flex-direction: column;
    gap: 6px;
    background: #343434;
    border-radius: 12px;
    padding: 6px;
    position: absolute;
    width: 100%;
    top: 60px;
    z-index: 10
}

.maxTag {
    margin: 6px 0px;
}

.statusMain {
    border-radius: 6px;
    padding: 4px 12px;
    outline: none;
    background: transparent;
    border: 2px solid rgba(117,184,200, 0.1);
    color: rgba(255, 255, 255, 0.5);
    font-family: var(--font-init);
    cursor: pointer;
}

.Backlog, .InProgress, .InReview, .Completed {
    border-radius: 6px;
    padding: 4px 12px;
    outline: none;
    background: #151515;
    border: 2px solid rgba(117,184,200, 0.1);
    color: rgba(255, 255, 255, 0.5);
    font-family: var(--font-init);
    cursor: pointer;
    transition: all .3s ease;
}

.Backlog:hover, .InProgress:hover, .InReview:hover, .Completed:hover {
    background: #514a4a;
}


.tags {
    position: relative;
}

.buttons {
    display: flex;
    align-items: center;
    gap: 12px;
}

.buttons > button:nth-child(1) {
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

.buttons > button:nth-child(1) > img {
    width: 18px;
    height: 18px;
}

.buttons > button:nth-child(2) {
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