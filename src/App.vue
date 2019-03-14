<template>
  <div id="app">
    <header>
      <nav class="nav nav-tabs">
          <a class="nav-item nav-link active" href="#">
            <img src="./assets/16x16/status/appointment-soon.png" alt="Logo" /> Home
          </a>
          <a class="nav-item nav-link" href="#">Settings</a>
          <a class="nav-item nav-link" href="#">About</a>
      </nav>
    </header>
    <main>
      <HomePage />
    </main>
  </div>
</template>

<script>
import HomePage from './components/HomePage.vue';

export default {
  name: 'app',
  components: {
    HomePage,
  },
};
</script>

<style>
</style>
