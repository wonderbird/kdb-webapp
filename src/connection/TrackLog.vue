<template>
  <div class="container">
    <div class="row">
      <div class="col title">Diese Verbindung wird beobachtet</div>
    </div>
    <div class="row">
      <div class="col-1">07:19</div>
      <div class="col-1 text-danger">(07:26)</div>
      <div class="col-1 text-danger">(+7)</div>
      <div class="col-9">Rösrath-Stümpen</div>
    </div>
    <div class="row">
      <div class="col-1">07:29</div>
      <div class="col-1 text-danger">(07:36)</div>
      <div class="col-1 text-danger">(+7)</div>
      <div class="col-3">Köln Trimbornstraße</div>
    </div>
    <div class="row">
      <div class="col title">Fahrtverlauf</div>
    </div>
    <div class="row">
      <div class="col-1"><canvas id="canvas-1" height="0" width="0"></canvas></div>
      <div class="col-1">07:02</div>
      <div class="col-1 text-success">07:02</div>
      <div class="col-1 text-success">0</div>
      <div class="col-8">Overath</div>
    </div>
    <div class="row">
      <div class="col-1"></div>
      <div class="col-1">07:06</div>
      <div class="col-1 text-success">07:06</div>
      <div class="col-1 text-success">0</div>
      <div class="col-8">Honrath</div>
    </div>
      <div class="row">
      <div class="col-1"></div>
      <div class="col-1">07:07</div>
      <div class="col-1 text-success">07:07</div>
      <div class="col-1 text-success">0</div>
    </div>
    <div class="row">
      <div class="col-1"></div>
      <div class="col-1">07:12</div>
      <div class="col-1 text-danger">07:15</div>
      <div class="col-1 text-danger">+3</div>
      <div class="col-8">Hoffnungsthal</div>
    </div>
    <div class="row">
      <div class="col-1"></div>
      <div class="col-1">07:12</div>
      <div class="col-1 text-danger">07:19</div>
      <div class="col-1 text-danger">+7</div>
    </div>
    <div class="row">
      <div class="col-1"></div>
      <div class="col-1">07:15</div>
      <div class="col-1 text-danger">(07:22)</div>
      <div class="col-1 text-danger">(+7)</div>
      <div class="col-8">Rösrath</div>
    </div>
    <div class="row">
      <div class="col-1"></div>
      <div class="col-1">07:16</div>
      <div class="col-1 text-danger">(07:23)</div>
      <div class="col-1 text-danger">(+7)</div>
    </div>
    <div class="row bg-light font-weight-bold">
      <div class="col-1"></div>
      <div class="col-1">07:19</div>
      <div class="col-1 text-danger">(07:26)</div>
      <div class="col-1 text-danger">(+7)</div>
      <div class="col-8">Rösrath-Stümpen</div>
    </div>
    <div class="row">
      <div class="col-1"></div>
      <div class="col-1">07:20</div>
      <div class="col-1 text-danger">(07:27)</div>
      <div class="col-1 text-danger">(+7)</div>
    </div>
    <div class="row">
      <div class="col-1"></div>
      <div class="col-1">07:26</div>
      <div class="col-1 text-danger">(07:33)</div>
      <div class="col-1 text-danger">(+7)</div>
      <div class="col-8">Köln Frankfurter Straße</div>
    </div>
    <div class="row">
      <div class="col-1"></div>
      <div class="col-1">07:26</div>
      <div class="col-1 text-danger">(07:33)</div>
      <div class="col-1 text-danger">(+7)</div>
    </div>
    <div class="row bg-light font-weight-bold">
      <div class="col-1"></div>
      <div class="col-1">07:30</div>
      <div class="col-1 text-danger">(07:37)</div>
      <div class="col-1 text-danger">(+7)</div>
      <div class="col-8">Köln Trimbornstraße</div>
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
export default {
  name: 'TrackLog',
};
</script>

<style>
.title {
  margin: 20px 0 10px 0;
  font-size: 2.5ex;
  font-weight: bold;
}

/* Track log */
.container>div.row:nth-child(2n+5) {
  margin-bottom: 20px;
}

/* Explanations */
.container>div.row:nth-last-child(2) {
  margin-bottom: 0;
}
</style>
