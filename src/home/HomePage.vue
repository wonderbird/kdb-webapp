<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h2>Deine Position</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-6" data-testid="coord-n">N {{ coords.latitude.toFixed(7) }}</div>
      <div class="col-6" data-testid="coord-e">E {{ '0' + coords.longitude.toFixed(7) }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      coords: {
        latitude: 48,
        longitude: 2,
      }
    }
  }
};
</script>

<style scoped>
</style>
