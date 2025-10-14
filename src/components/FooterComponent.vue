<script setup>
import { ref } from "vue";
const email = ref("");
</script>

<template>
  <div class="footer-container">
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
      <router-link to="/about">About</router-link>
      <router-link to="/shop">Shop</router-link>
      <a @click="$emit('scrollToContacts')">Contact</a>
    </div>

    <div class="footer-right-section section">
      <div class="section-title">For Every Update</div>
      <div class="input-container">
        <input
          type="email"
          placeholder="Enter your email"
          class="subscribe-input"
          v-model="email"
        />
        <button class="subscribe-button">Subscribe</button>
      </div>
    </div>
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
  margin-top: 15px;
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

.subscribe-button {
  padding: 5px 10px;
  font-size: 16px;
  color: var(--footer-accent);
  border: 2px solid var(--subscribe-button-colour);
  background-color: var(--subscribe-button-colour);
  cursor: pointer;
}
</style>
