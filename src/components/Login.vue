<template>
  <div>
    <h2 :class="$style.title">Log In</h2>

    <div :class="$style.mainWrapper">
      <div :class="$style.formWrapper">
        <div :class="$style.item">
          <label for="email">Email</label>
          <div :class="$style.itemInput">
            <div>
              <img src="/email.png" alt="emailIcon" />
            </div>
            <input required type="text" placeholder="example@gmail.com" />
          </div>
        </div>

        <div :class="$style.item">
          <label for="password">Password</label>
          <div :class="$style.itemInput">
            <div>
              <img src="/Password.png" alt="passwordIcon" />
            </div>
            <input required type="password" placeholder="*********" />
          </div>
        </div>
      </div>

      <button :class="$style.btn">Log In</button>

      <div>Don't have an account? <span>Sign Up</span></div>
    </div>
  </div>
</template>

<script setup></script>

<style module>
.title {
  font-size: 48px;
  color: var(--color-2);
  margin-bottom: 52px;
  text-align: center;
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
}
</style>
