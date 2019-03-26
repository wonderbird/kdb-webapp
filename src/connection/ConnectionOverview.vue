<template>
  <div class="container">
    <div class="row">
      <div class="col title">Diese
        <span v-if="connections.length > 1">Verbindungen werden</span>
        <span v-else>Verbindung wird</span>
        beobachtet</div>
    </div>
    <div class="row" v-for="(connection,index) in connections" :key="index">
      <div class="col-2">{{ connection.origin.scheduledTime | moment("HH:mm") }}</div>
      <div :class="[delayIndicatorClass(connection.origin.delayMinutes), 'col-2']">
        {{ connection.origin.expectedTime | moment("HH:mm") }}</div>
      <div :class="[delayIndicatorClass(connection.origin.delayMinutes), 'col-1']">
        {{ delayToString(connection.origin.delayMinutes) }}
      </div>
      <div class="col-5">{{ connection.origin.station }}</div>
      <div class="col-2"><button id="edit">📝</button></div>
      <div class="col-2">{{ connection.destination.scheduledTime | moment("HH:mm") }}</div>
      <div :class="[delayIndicatorClass(connection.destination.delayMinutes), 'col-2']">
        {{ connection.destination.expectedTime | moment("HH:mm") }}</div>
      <div :class="[delayIndicatorClass(connection.origin.delayMinutes), 'col-1']">
        {{ delayToString(connection.destination.delayMinutes) }}
      </div>
      <div class="col-5">{{ connection.destination.station }}</div>
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
  methods: {
    delayIndicatorClass(delayMinutes) {
      return delayMinutes > 0 ? 'text-danger' : 'text-success';
    },
    delayToString(delayMinutes) {
      return delayMinutes > 0 ? '+' + delayMinutes : '0';
    },
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
