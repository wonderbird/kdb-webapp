<template>
  <div class="container">
    <div class="row">
      <div class="col title">Diese Verbindung wird beobachtet</div>
    </div>
    <div class="row">
      <div class="col-2">{{ connections[0].scheduledDeparture | moment("HH:mm") }}</div>
      <div class="col-2 text-success">{{ connections[0].expectedDeparture | moment("HH:mm") }}</div>
      <div class="col-1 text-success">{{ expectedDepartureDelays[0] }}</div>
      <div class="col-5">{{ connections[0].origin }}</div>
      <div class="col-2"><button id="edit">📝</button></div>
    </div>
    <div class="row">
      <div class="col-2">{{ connections[0].scheduledArrival | moment("HH:mm") }}</div>
      <div class="col-2 text-success">{{ connections[0].expectedArrival | moment("HH:mm") }}</div>
      <div class="col-1 text-success">{{ expectedArrivalDelays[0] }}</div>
      <div class="col-5">Overath</div>
      <div class="col-2"><button id="delete">🗑️</button></div>
    </div>
    <div class="row">
      <div class="col-2">{{ connections[1].scheduledDeparture | moment("HH:mm") }}</div>
      <div class="col-2 text-danger">{{ connections[1].expectedDeparture | moment("HH:mm") }}</div>
      <div class="col-1 text-danger">{{ expectedDepartureDelays[1] }}</div>
      <div class="col-5">{{ connections[1].origin }}</div>
      <div class="col-2"><button id="edit">📝</button></div>
    </div>
    <div class="row">
      <div class="col-2">{{ connections[1].scheduledArrival | moment("HH:mm") }}</div>
      <div class="col-2 text-danger">{{ connections[1].expectedArrival | moment("HH:mm") }}</div>
      <div class="col-1 text-danger">{{ expectedArrivalDelays[1] }}</div>
      <div class="col-5">Overath</div>
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
      convertMillisToMinutes(arrayOfMillis) {
        const delaysMinutes = [];
        for (let i = 0, size = arrayOfMillis.length; i < size; i += 1) {
          const delayMinutes = Math.round(arrayOfMillis[i] / 1000.0 / 60.0);
          delaysMinutes.push(delayMinutes);
        }
        return delaysMinutes;
      },
    };
  },
  computed: {
    expectedArrivalDelays() {
      const delaysMillis = connections.map(x => x.expectedArrival - x.scheduledArrival);
      const delaysMinutes = this.convertMillisToMinutes(delaysMillis);
      return delaysMinutes;
    },
    expectedDepartureDelays() {
      const delaysMillis = connections.map(x => x.expectedDeparture - x.scheduledDeparture);
      const delaysMinutes = this.convertMillisToMinutes(delaysMillis);
      return delaysMinutes;
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
