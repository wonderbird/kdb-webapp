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
      <TrackLog />
    </main>
  </div>
</template>

<script>
// import HomePage from './home/HomePage.vue';
import TrackLog from './connection/TrackLog.vue';

export default {
  name: 'app',
  components: {
    TrackLog,
  },
};
</script>

<style>
</style>
