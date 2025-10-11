<script setup></script>

<template>
  <div class="footer-container">
    <div class="footer-content">
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
        <router-link to="/contact">Contact</router-link>
      </div>

      <div class="footer-right-section section">
        <div class="section-title">For Every Update</div>
        <div class="subscribe-container">
          <input
            type="email"
            placeholder="Enter your email"
            class="subscribe-input"
          />
          <button class="subscribe-button">Subscribe</button>
        </div>
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
  margin-top: 40px;
  padding: 25px 40px;
  height: 250px;
  box-sizing: border-box;
  border-radius: 50px;
  margin-top: 65px;
}

.footer-content {
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  gap: 150px;
}

.section {
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 1;
  align-items: flex-start;
  text-align: left;
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

a {
  margin: 5px 0;
}

.subscribe-container {
  display: flex;
  align-items: stretch;
  margin-top: 15px;
}

.subscribe-input {
  flex: 1;
  padding: 5px 10px;
  border: 2px solid var(--subscribe-button-colour);
  background: transparent;
  outline: none;
  width: 150px;

  &::placeholder {
    color: var(--font-colour);
    opacity: 0.7;
  }

  &:focus {
    border-color: var(--subscribe-button-colour);
    box-shadow: 0 0 0 1px var(--subscribe-button-colour);
  }
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
