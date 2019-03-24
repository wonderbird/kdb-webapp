<template>
  <div class="container">
    <div class="row">
      <div class="col title">Diese
        <span v-if="connections.length > 1">Verbindungen werden</span>
        <span v-else>Verbindung wird</span>
        beobachtet</div>
    </div>
    <div class="row" v-for="(connection,index) in connections" :key="index">
      <div class="col-2">{{ connection.scheduledDeparture | moment("HH:mm") }}</div>
      <div class="col-2">{{ connection.expectedDeparture | moment("HH:mm") }}</div>
      <div class="col-1">
        <span v-if="connection.expectedDepartureDelayMinutes > 0.0">
          +{{ connection.expectedDepartureDelayMinutes }}
        </span>
        <span v-else-if="connection.expectedDepartureDelayMinutes < 0.0">
          -{{ connection.expectedDepartureDelayMinutes }}
        </span>
        <span v-else>{{ connection.expectedDepartureDelayMinutes }}</span>
      </div>
      <div class="col-5">{{ connection.origin }}</div>
      <div class="col-2"><button id="edit">📝</button></div>
      <div class="col-2">{{ connection.scheduledArrival | moment("HH:mm") }}</div>
      <div class="col-2">{{ connection.expectedArrival | moment("HH:mm") }}</div>
      <div class="col-1">
        <span v-if="connection.expectedArrivalDelayMinutes > 0.0">
          +{{ connection.expectedArrivalDelayMinutes }}
        </span>
        <span v-else-if="connection.expectedArrivalDelayMinutes < 0.0">
          -{{ connection.expectedArrivalDelayMinutes }}
        </span>
        <span v-else>{{ connection.expectedArrivalDelayMinutes }}</span>
      </div>
      <div class="col-5">{{ connection.destination }}</div>
      <div class="col-2"><button id="delete">🗑️</button></div>
    </div>
    <div class="row">
      <div class="col-2"><button id="add-connection">+</button></div>
      <div class="col-2"><button id="edit-sequence">↕️</button></div>
      <div class="col-8"></div>
    </div>
    <div class="row">
      <div class="col title">Erläuterungen</div>
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

export default {
  name: 'ConnectionOverview',
  data() {
    return {
      connections,
    };
  },
};
</script>

<style>
.title {
  margin: 20px 0 10px 0;
  font-size: 2.5ex;
  font-weight: bold;
}

/* Track log */
.container>div.row:nth-child(2n+3) {
  margin-bottom: 20px;
}

/* Explanations */
.container>div.row:nth-last-child(2) {
  margin-bottom: 0;
}
</style>
