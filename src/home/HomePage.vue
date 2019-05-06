<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h2>Deine Position</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-6" data-testid="coord-n">N 52.5090388</div>
      <div class="col-6" data-testid="coord-e">E 13.3885079</div>
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
</style>
