<template>
  <div class="container">
    <div class="row">
      <div class="col headline">
          <img class="align-middle" src="../assets/32x32/status/appointment-soon.png" />&nbsp;
          <h1 class="align-middle">Kommt die Bahn?</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-3">Deine Position:</div>
      <div class="col-9">52.5090388, 13.3885079</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.headline {
  margin: 20px 0;
}
.headline>* {
  white-space: nowrap;
  display: inline-block;
}

.headline>h1.align-middle {
  margin: 0;
}
</style>
