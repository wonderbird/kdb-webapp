<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h2>Deine Position</h2>
      </div>
    </div>
    <div class="row">
      <div class="col" data-testid="coord">{{ coords | gpsCoordinate }}</div>
    </div>
  </div>
</template>

<script>
import gpsCoordinateFilter from '../shared/gps-coordinate-filter';

export default {
  name: 'HomePage',
  filters: { gpsCoordinate: gpsCoordinateFilter },
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
