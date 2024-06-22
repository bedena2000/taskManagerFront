<template>
  <div @keydown.enter="handleLogin">
    <h2 :class="$style.title">Log In</h2>

    <div :class="$style.mainWrapper">
      <div :class="$style.formWrapper">
        <div :class="$style.item">
          <label for="email">Email</label>
          <div :class="$style.itemInput">
            <div>
              <img src="/email.png" alt="emailIcon" />
            </div>
            <input v-model="username" required type="text" placeholder="example@gmail.com" />
          </div>
        </div>

        <div :class="$style.item">
          <label for="password">Password</label>
          <div :class="$style.itemInput">
            <div>
              <img src="/Password.png" alt="passwordIcon" />
            </div>
            <input v-model="password" required type="password" placeholder="*********" />
          </div>
        </div>

        <p :class="$style.errorMessage">
          {{ errorMessage }}
        </p>
      </div>

      <button @click="handleLogin" :class="$style.btn">Log In</button>

      <div :class="$style.switchLink">
        Don't have an account?
        <span @click="$emit('changePage')">Sign Up</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import services from '@/services/index.js';
const emit = defineEmits(["changePage"]);

const username = ref("");
const password = ref("");
const errorMessage = ref("");


const handleLogin = async () => {
  const credentials = {
    username: username.value.trim(),
    password: password.value.trim()
  };

  try {
    const data = await services.loginUser(credentials);

    if(data.token && !data.message) {
      const date = new Date();
      date.setTime(date.getTime() + (24 * 60 * 60 * 1000)); // 24 hours from now
      const expires = date.toUTCString();
      const token = data.token;
      document.cookie = `token=${token}; expires=${expires}; path=/`;
    }

    errorMessage.value = "";
  } catch (error) {
    errorMessage.value = error.response.data.message;
  }


};

</script>

<style module>
.title {
  font-size: 48px;
  color: var(--color-2);
  margin-bottom: 52px;
  text-align: center;
}

.switchLink {
  font-size: 24px;
  color: var(--color-2);
  margin-top: 27px;
  text-align: center;
}

.switchLink > span {
  color: var(--btn-color-1);
  cursor: pointer;
}

.formWrapper {
  display: flex;
  flex-direction: column;
  gap: 27px;
}

.item {
  opacity: 0.5;
}

.item > label {
  font-size: 24px;
  color: var(--color-2);
}

.itemInput {
  display: flex;
  background-color: transparent;
  border: 4px solid var(--color-2);
  border-radius: 15px;
  padding: 13px 18px;
  margin-top: 8px;
}

.itemInput > div {
  margin-right: 15px;
  padding-right: 15px;
  display: flex;
  border-right: 2px solid var(--color-2);
}

.itemInput > div > img {
  width: 36.67px;
  height: 29.33px;
}

.itemInput > input {
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 24px;
  font-family: var(--font-itim);
  color: var(--color-2);
  cursor: pointer;
}

.itemInput > input::placeholder {
  font-size: var(--font-itim);
  font-size: 24px;
  color: var(--color-2);
}

.itemInput > input:focus + .item {
  opacity: 1;
}

.btn {
  color: var(--color-2);
  font-size: 31.35px;
  padding: 12px 0px;
  background-color: var(--btn-color-1);
  border-radius: 15px;
  width: 100%;
  outline: none;
  border: none;
  font-family: var(--font-itim);
  margin-top: 61px;
  cursor: pointer;
}

.errorMessage {
  color: var(--color-2);
  opacity: 0.5;
  width: 100%;
}

@media (max-width: 768px) {
  .title {
    font-size: 32px;
  }

  .item > label {
    font-size: 18px;
  }

  .mainWrapper {
    width: 100%;
    padding: 12px;
  }

  .itemInput > input {
    width: 100%;
    font-size: 14px;
  }

  .itemInput > input::placeholder {
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .itemInput > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .itemInput > div > img {
    width: 24px;
    height: 18px;
  }

  .btn {
    font-size: 16px;
    margin-top: 24px;
  }

  .formWrapper {
    gap: 12px;
  }

  .switchLink {
    font-size: 14px;
  }
}
</style>
