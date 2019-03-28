<template>
<div class="col-12">
  <div class="row">
      <div class="col-2">{{ waypoint.scheduledTime | moment("HH:mm") }}</div>
      <div :class="[delayIndicatorClass(waypoint.delayMinutes), 'col-2']">
        {{ waypoint.expectedTime | moment("HH:mm") }}</div>
      <div :class="[delayIndicatorClass(waypoint.delayMinutes), 'col-2']">
        {{ delayToString(waypoint.delayMinutes) }}
      </div>
      <div class="col-6">{{ waypoint.name }}</div>
  </div>
</div>
</template>

<script>
export default {
  name: 'TimeTableRow',
  props: {
    waypoint: {
      type: Object,
      required: true,
      validator(value) {
        return Object.prototype.hasOwnProperty.call(value, 'name')
          && Object.prototype.hasOwnProperty.call(value, 'scheduledTime')
          && Object.prototype.hasOwnProperty.call(value, 'expectedTime')
          && Object.prototype.hasOwnProperty.call(value, 'delayMinutes');
      },
    },
  },
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
