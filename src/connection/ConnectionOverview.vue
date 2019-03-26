<template>
  <div class="container">
    <div class="row">
      <div class="col title">Diese
        <span v-if="connections.length > 1">Verbindungen werden</span>
        <span v-else>Verbindung wird</span>
        beobachtet</div>
    </div>
    <div class="row" v-for="(connection,index) in connections" :key="index">
      <TimeTableRow :record="connection.origin" />
      <div class="col-2"><button id="edit">📝</button></div>
      <TimeTableRow :record="connection.destination" />
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
.title {
  margin: 20px 0 10px 0;
  font-size: 2.5ex;
  font-weight: bold;
}

/* Track log */
.container>div.row:nth-child(2n) {
  margin-bottom: 20px;
}
</style>
