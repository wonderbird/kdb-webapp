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
  import gpsCoordinateFilter from "../shared/gps-coordinate-filter";

  export default {
    name: "HomePage",
    filters: {gpsCoordinate: gpsCoordinateFilter},
    computed: {
      coords() {
        let latitude = 52.509034;
        let longitude = 13.390693;

        return {
          latitude,
          longitude
        };
      }
    }
  };
</script>

<style scoped>
</style>
