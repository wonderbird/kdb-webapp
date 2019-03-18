<template>
  <div id="app">
    <header>
      <nav class="nav nav-tabs">
          <a class="nav-item nav-link active" href="#">
            <img src="./assets/16x16/status/appointment-soon.png" alt="Logo" /> Start
          </a>
          <a class="nav-item nav-link" href="#">Einstellungen</a>
          <a class="nav-item nav-link" href="#">Hilfe</a>
      </nav>
    </header>
    <main>
      <ConnectionOverview />
    </main>
  </div>
</template>

<script>
// import HomePage from './home/HomePage.vue';
import ConnectionOverview from './connection/ConnectionOverview.vue';

export default {
  name: 'app',
  components: {
    ConnectionOverview,
  },
};
</script>

<style>
</style>
