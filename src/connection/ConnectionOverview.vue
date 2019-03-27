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
    <div class="row timetable" v-for="(connection,index) in connections" :key="index">
      <TimeTableRow :waypoint="connection.origin" />
      <div class="col-2">
        <b-btn variant="outline-dark" :to="{name: 'ConnectionEditor'}">
          &#x1f4dd;
        </b-btn>
      </div>
      <TimeTableRow :waypoint="connection.destination" />
      <div class="col-2"><button id="delete">🗑️</button></div>
    </div>
    <div class="row">
      <div class="col-2"><button id="add-connection">+</button></div>
      <div class="col-2"><button id="edit-sequence">↕️</button></div>
      <div class="col-8"></div>
    </div>
    <div class="row">
      <div class="col">
        <h2>Erläuterungen</h2>
      </div>
    </div>
    <div class="row">
      <div class="col">
        Wenn eine Zahl in Klammern steht, dann ist der Zug noch nicht an dieser Station
        angekommen. Die angegebene Uhrzeit bzw. Verspätung ist in diesem Fall geschätzt.
      </div>
    </div>
  </div>
</template>

<script>
import connections from '../data/connection-overview';
import TimeTableRow from './TimeTableRow.vue';

export default {
  name: 'ConnectionOverview',
  components: { TimeTableRow },
  data() {
    return {
      connections,
    };
  },
};
</script>

<style>
.timetable {
  margin-bottom: 20px;
}
</style>
