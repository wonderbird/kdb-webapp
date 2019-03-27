<template>
  <div id="app">
    <header>
      <nav> <!-- nav wrapper for accessibility -->
        <b-nav tabs>
            <b-nav-item active :to="{name: 'Home'}">
              <img src="./assets/16x16/status/appointment-soon.png" alt="Logo" /> Start
            </b-nav-item>
            <b-nav-item :to="{name: 'ConnectionOverview'}">Verbindungen</b-nav-item>
            <b-nav-item :to="{name: 'Info'}">Info</b-nav-item>
        </b-nav>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
h1 {
  margin-top: 20px;
  font-size: 4ex;
  font-weight: bold;
}
h2 {
  margin-top: 20px;
  font-size: 2.5ex;
  font-weight: bold;
}
</style>
