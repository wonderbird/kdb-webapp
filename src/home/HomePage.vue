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
  filters: { gpsCoordinate: gpsCoordinateFilter },
  computed: {
    coords() {
      let latitude = undefined;
      let longitude = undefined;
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          latitude = position.latitude;
          longitude = position.longitude;
        });
      }

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
