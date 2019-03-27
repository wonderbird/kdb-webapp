<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h2>Verbindung bearbeiten</h2>
      </div>
    </div>

    <form>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputStart">Start</label>
          <input
            type="text"
            class="form-control"
            id="inputStart"
            placeholder="Startbahnhof eingeben">
        </div>
        <div class="form-group col-md-6">
          <label for="inputDestination">Ziel</label>
          <input
            type="text"
            class="form-control"
            id="inputDestination"
            placeholder="Zielbahnhof eingeben">
        </div>
      </div>
      <div class="form-row">
        <div class="col-8 col-md-10 text-right">
          <button type="button" class="btn btn-light">Abbruch</button>
        </div>
        <div class="col-4 col-md-2 text-right">
          <!-- <button type="button" class="btn btn-primary">Speichern</button> -->
          <b-btn variant="primary" :to="{name: 'ConnectionOverview'}">
            Speichern
          </b-btn>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ConnectionEditor',
};
</script>

<style scoped>
</style>
