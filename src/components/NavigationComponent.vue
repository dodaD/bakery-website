<script setup></script>

<template>
     <div class="navigation">
          <div class="logo">
               <div>Bakery</div>
          </div>
          <div class="menu">
               <router-link to="/">Home</router-link>
               <router-link to="/about">About</router-link>
               <router-link to="/shop">Shop</router-link>
               <router-link to="/contact">Contact</router-link>
          </div>

          <div class="buttons-wrapper">
               <button>
                    <font-awesome-icon :icon="['fas', 'magnifying-glass']" class="icon" />
               </button>
               <button>
                    <font-awesome-icon :icon="['fas', 'bag-shopping']" class="icon" />
               </button>
          </div>
     </div>
</template>

<style lang="scss" scoped>
@import "@/styles/colours.scss";

.navigation {
     display: flex;
     width: 100%;
     align-items: center;
     font-size: 20px;
}

.menu {
     width: 60%;
     display: flex;
     align-items: center;
     justify-content: center;

     a {
          margin: 0 15px;
          text-decoration: none;
          color: inherit;
          font-weight: normal;

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
          cursor: pointer;
     }
}

.icon {
     height: 20px;
     width: 20px;
}

.logo {
     margin-right: 20%;
}
</style>
