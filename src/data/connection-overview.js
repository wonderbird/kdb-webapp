const connections = [
  {
    origin: 'Rösrath-Stümpen',
    destination: 'Overath',

    scheduledDeparture: '07:09',
    expectedDeparture: '07:09',
    expectedDepartureDelay: 0,

    scheduledArrival: '07:29',
    expectedArrival: '07:29',
    expectedArrivalDelay: 0,
  },
  {
    origin: 'Rösrath-Stümpen',
    destination: 'Köln Trimbornstraße',

    scheduledDeparture: '07:19',
    expectedDeparture: '07:26',
    expectedDepartureDelay: 7,

    scheduledArrival: '07:30',
    expectedArrival: '07:37',
    expectedArrivalDelay: 7,
  },
];

export default connections;
