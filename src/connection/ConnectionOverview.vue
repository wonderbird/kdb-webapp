<template>
  <div class="container">
    <div class="row">
      <div class="col title">Diese Verbindung wird beobachtet</div>
    </div>
    <div class="row">
      <div class="col-1">{{ connections[0].scheduledDeparture }}</div>
      <div class="col-1 text-success">{{ connections[0].expectedDeparture }}</div>
      <div class="col-1 text-success">{{ connections[0].expectedDepartureDelay }}</div>
      <div class="col-8">{{ connections[0].origin }}</div>
      <div class="col-1"><button id="edit">📝</button></div>
    </div>
    <div class="row">
      <div class="col-1">{{ connections[0].scheduledArrival }}</div>
      <div class="col-1 text-success">{{ connections[0].expectedArrival }}</div>
      <div class="col-1 text-success">{{ connections[0].expectedArrivalDelay }}</div>
      <div class="col-8">Overath</div>
      <div class="col-1"><button id="delete">🗑️</button></div>
    </div>
    <div class="row">
      <div class="col-1">{{ connections[1].scheduledDeparture }}</div>
      <div class="col-1 text-danger">{{ connections[1].expectedDeparture }}</div>
      <div class="col-1 text-danger">{{ connections[1].expectedDepartureDelay }}</div>
      <div class="col-8">{{ connections[1].origin }}</div>
      <div class="col-1"><button id="edit">📝</button></div>
    </div>
    <div class="row">
      <div class="col-1">{{ connections[1].scheduledArrival }}</div>
      <div class="col-1 text-danger">{{ connections[1].expectedArrival }}</div>
      <div class="col-1 text-danger">{{ connections[1].expectedArrivalDelay }}</div>
      <div class="col-8">Overath</div>
      <div class="col-1"><button id="delete">🗑️</button></div>
    </div>
    <div class="row">
      <div class="col-1"><button id="add-connection">+</button></div>
      <div class="col-1"><button id="edit-sequence">↕️</button></div>
      <div class="col-1"></div>
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
