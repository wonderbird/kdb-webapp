<template>
  <div class="container">
    <div class="row">
      <div class="col title">Diese Verbindung wird beobachtet</div>
    </div>
    <div class="row">
      <div class="col-1">07:09</div>
      <div class="col-1 text-success">(07:09)</div>
      <div class="col-1 text-success">(0)</div>
      <div class="col-8">Rösrath-Stümpen</div>
      <div class="col-1"><button id="edit">📝</button></div>
    </div>
    <div class="row">
      <div class="col-1">07:30</div>
      <div class="col-1 text-success">(07:30)</div>
      <div class="col-1 text-success">(0)</div>
      <div class="col-8">Overath</div>
      <div class="col-1"><button id="delete">🗑️</button></div>
    </div>
    <div class="row">
      <div class="col-1">07:19</div>
      <div class="col-1 text-danger">(07:26)</div>
      <div class="col-1 text-danger">(+7)</div>
      <div class="col-8">Rösrath-Stümpen</div>
      <div class="col-1"><button id="edit">📝</button></div>
    </div>
    <div class="row">
      <div class="col-1">07:29</div>
      <div class="col-1 text-danger">(07:36)</div>
      <div class="col-1 text-danger">(+7)</div>
      <div class="col-8">Köln Trimbornstraße</div>
      <div class="col-1"><button id="delete">🗑️</button></div>
    </div>    <div class="row">
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
