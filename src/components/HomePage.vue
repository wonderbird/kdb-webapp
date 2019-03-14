<template>
  <div class="container">
    <div class="row">
      <div class="col headline">
          <img class="align-middle" src="../assets/32x32/status/appointment-soon.png" />&nbsp;
          <h1 class="align-middle">Kommt die Bahn?</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-2">Deine Position:</div>
      <div class="col-10">52.5090388, 13.3885079</div>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.headline>* {
  white-space: nowrap;
  display: inline-block;
}

.headline>h1.align-middle {
  margin: 0;
}

</style>
