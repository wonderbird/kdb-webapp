<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h2>Deine Position</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-6">N 52.5090388</div>
      <div class="col-6">E 13.3885079</div>
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
