<script setup>
import { ref, watch } from "vue";
import { useMobileStore } from "@/stores/isMobileStore.js";

const mobileStore = useMobileStore();
const email = ref("");
const emailValidity = ref(true);
const subscribedStatus = ref(false);

function validateEmail() {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  emailValidity.value = emailPattern.test(email.value);

  if (emailValidity.value) {
    subscribedStatus.value = true;
    email.value = "";
    setTimeout(() => {
      subscribedStatus.value = false;
    }, 3000);
  }
}

watch(email, () => {
  if (email.value == "") {
    emailValidity.value = true;
  }
});
</script>

<template>
  <div
    class="footer-container"
    :class="{ 'footer-container-mobile': mobileStore.isMobile }"
  >
    <div class="footer-left-section section">
      <div class="logo section-title">Bakery</div>
      <div>
        We are a family-owned bakery dedicated to providing the freshest and
        most delicious baked goods.
      </div>
    </div>

    <div class="footer-middle-section section">
      <div class="section-title">Quick Links</div>
      <router-link to="/">Home</router-link>
      <router-link to="/">About</router-link>
      <router-link to="/">Shop</router-link>
      <a @click="$emit('scrollToContacts')">Contact</a>
    </div>

    <div class="footer-right-section section">
      <div class="section-title">For Every Update</div>
      <div v-if="!emailValidity" class="invalid-message">
        Please enter a valid email
      </div>
      <div class="input-container">
        <input
          type="email"
          placeholder="Enter your email"
          class="subscribe-input"
          v-model="email"
          :class="{ invalid: !emailValidity }"
        />
        <button class="subscribe-button" @click="validateEmail">
          Subscribe
        </button>
      </div>
    </div>
  </div>

  <div :class="{ 'hide-message': !subscribedStatus }" class="alert-message">
    Congratulations! You have successfully subscribed.
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/colours.scss";
@import "@/styles/common-styles.scss";

.footer-container {
  width: 100%;
  background-color: var(--footer-accent);
  padding: 25px 40px;
  height: 250px;
  box-sizing: border-box;
  border-radius: 50px;
  margin-top: 65px;
  display: flex;
}

.footer-container-mobile {
  flex-direction: column;
  height: auto;
  padding: 30px;
  gap: 30px;
  box-sizing: content-box;
  transform: translateX(-30px);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.section {
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 1;
  margin: 0 20px;
}

.section-title {
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 10px;
}

.logo {
  font-size: 28px;
  font-weight: 700;
}

.footer-middle-section a {
  margin: 5px 0;
  cursor: pointer;
}

.input-container {
  display: flex;
}

.subscribe-input {
  padding: 5px 10px;
  border: 2px solid var(--subscribe-button-colour);
  background: transparent;
}

.subscribe-input::placeholder {
  color: var(--font-colour);
}

.subscribe-input:focus {
  outline: none;
}

.invalid-message {
  color: var(--error-colour);
  font-size: 12px;
}

.subscribe-button {
  padding: 5px 10px;
  font-size: 16px;
  color: var(--footer-accent);
  border: 2px solid var(--subscribe-button-colour);
  background-color: var(--subscribe-button-colour);
  cursor: pointer;
}
</style>
