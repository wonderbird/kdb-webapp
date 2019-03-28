<template>
  <div id="app">
    <header>
      <nav role="navigation"> <!-- nav wrapper for accessibility -->
        <b-navbar toggleable="md" type="dark" variant="dark">
          <b-navbar-brand>Kommt die Bahn?</b-navbar-brand>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item :to="{name: 'Home'}">
                <img src="./assets/16x16/status/appointment-soon.png" alt="Logo" /> Start
              </b-nav-item>
              <b-nav-item :to="{name: 'ConnectionOverview'}">Verbindungen</b-nav-item>
              <b-nav-item :to="{name: 'Info'}">Info</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
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
