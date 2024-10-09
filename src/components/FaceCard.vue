<script setup lang="ts">
import { RouterLink } from 'vue-router'
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="wrapper">
    <img alt="Vue logo" class="logo" src="../assets/sydneyStairs.jpeg" />
    <div class="greetings">
      <h1 class="accent">{{ msg }}</h1>
      <h3>Senior Full Stack Software Engineer</h3>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/work">Work</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

img {
  height: 125px;
  width: 125px;
  border-radius: 10px;
}

.greetings {
  h1, h3 {
    text-align: center;
  }
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;

  a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);

    &:first-of-type {
      border: 0;
    }

    &.router-link-exact-active {
      color: var(--color-text);
    }

    &.router-link-exact-active:hover {
      background-color: transparent;
    }
  }
}

@media (min-width: 1024px) {
  .greetings {
    grid-column: 1 2;
    h1, h3 {
      text-align: left;
    }
  }

  img {
    height: 96px;
    width: 96px;
  }
  
  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }

  .wrapper {
    display: grid;
    grid-template-columns: 1fr 3fr;
  }
}
</style>
