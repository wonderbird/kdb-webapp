<template>
<div class="col-10">
  <div class="row">
      <div class="col-2">{{ record.scheduledTime | moment("HH:mm") }}</div>
      <div :class="[delayIndicatorClass(record.delayMinutes), 'col-2']">
        {{ record.expectedTime | moment("HH:mm") }}</div>
      <div :class="[delayIndicatorClass(record.delayMinutes), 'col-2']">
        {{ delayToString(record.delayMinutes) }}
      </div>
      <div class="col-6">{{ record.station }}</div>
  </div>
</div>
</template>

<script>
export default {
  name: 'TimeTableRow',
  props: ['record'],
  methods: {
    delayIndicatorClass(delayMinutes) {
      return delayMinutes > 0 ? 'text-danger' : 'text-success';
    },
    delayToString(delayMinutes) {
      return delayMinutes > 0 ? `+${delayMinutes}` : '0';
    },
  },
};
</script>
