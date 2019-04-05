<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h2>
          Diese
          <span v-if="connections.length > 1">Verbindungen werden</span>
          <span v-else>Verbindung wird</span>
          beobachtet
        </h2>
      </div>
    </div>
    <div
      class="row timetable"
      @click="$router.push({name: 'TrackLog'})"
      v-for="(connection,index) in connections"
      :key="index">
      <TimeTableRow :waypoint="connection.origin" />
      <TimeTableRow :waypoint="connection.destination" />
    </div>
    <div class="row justify-content-center">
      <div class="col-11 col-md-6">
        <b-button-group vertical>
          <b-button variant="primary" :to="{name: 'ConnectionEditor'}">
            Weitere Verbindung hinzufügen
          </b-button>
          <b-button variant="light">Reihenfolge der Verbindungen ändern</b-button>
        </b-button-group>
      </div>
    </div>
    <div id="help">
      <div class="row">
        <div class="col">
          <h2>Erläuterungen</h2>
        </div>
      </div>
      <div class="row">
        <div class="col">
          Klicke auf eine Verbindung, um den detaillierten Fahrtverlauf aufzurufen oder
          um die Verbindung aus der Beobachtungsliste zu entfernen.
        </div>
      </div>
      <div class="row">
        <div class="col">
          Wenn eine Zahl in Klammern steht, dann ist der Zug noch nicht an dieser Station
          angekommen. Die angegebene Uhrzeit bzw. Verspätung ist in diesem Fall geschätzt.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TimeTableRow from './TimeTableRow.vue';

export default {
  name: 'ConnectionOverview',
  components: { TimeTableRow },
  computed: {
    connections() {
      return this.$store.state.connections;
    },
  },
};
</script>

<style>
.timetable {
  margin-bottom: 20px;
  cursor: pointer;
}

.timetable:hover {
  background-color: lightgray;
}

#help .row:nth-child(n+2) {
  margin-bottom: 20px;
}
</style>
