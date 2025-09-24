<script setup></script>

<template>
     <div class="content-wrapper">
          <div class="navigation">
               <div class="logo">
                    <h1>Bakery</h1>
               </div>
               <div class="menu">
                    <router-link to="/">Home</router-link>
                    <router-link to="/about">About</router-link>
                    <router-link to="/shop">Shop</router-link>
                    <router-link to="/contact">Contact</router-link>
               </div>

               <div class="buttons-wrapper">
                    <button>
                         <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
                    </button>
                    <button>
                         <font-awesome-icon :icon="['fas', 'bag-shopping']" />
                    </button>
               </div>
          </div>

          <div class="hero"></div>

          <div class="best-sellers"></div>

          <div class="customer reviews"></div>

          <div class="footer"></div>
     </div>
</template>


<style lang="scss" scoped>
@import "@/styles/colours.scss";

.content-wrapper {
     max-width: 2000px;
     position: absolute;
     right: 50%;
     transform: translateX(50%);
     width: 100%;
     background-color: var(--background);
     height: 100%;
     padding: 0 50px;
     box-sizing: border-box;
}

.navigation {
     display: flex;
     width: 100%;
     align-items: center;
}

.menu {
     width: 60%;
     display: flex;
     align-items: center;
     justify-content: center;

     a {
          margin: 0 15px;

          &:first-of-type {
               margin-left: 0;
          }

          &:last-of-type {
               margin-right: 0;
          }
     }
}

.buttons-wrapper {
     display: flex;
     margin-left: 20%;

     button {
          background: none;
          border: none;
          margin-left: 20px;
          font-size: 16px;
          cursor: pointer;
     }
}

.logo {
     margin-right: 20%;
}
</style>