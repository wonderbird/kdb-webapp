const connections = [
  {
    origin: 'Rösrath-Stümpen',
    destination: 'Overath',

    scheduledDeparture: new Date('2019-02-01T06:09:00.000Z'),
    expectedDeparture: new Date('2019-02-01T06:09:00.000Z'),
    expectedDepartureDelayMinutes: 0,

    scheduledArrival: new Date('2019-02-01T06:29:00.000Z'),
    expectedArrival: new Date('2019-02-01T06:29:00.000Z'),
    expectedArrivalDelayMinutes: 0,
  },
  {
    origin: 'Rösrath-Stümpen',
    destination: 'Köln Trimbornstraße',

    scheduledDeparture: new Date('2019-02-01T06:19:00.000Z'),
    expectedDeparture: new Date('2019-02-01T06:26:00.000Z'),
    expectedDepartureDelayMinutes: 7,

    scheduledArrival: new Date('2019-02-01T06:30:00.000Z'),
    expectedArrival: new Date('2019-02-01T06:38:00.000Z'),
    expectedArrivalDelayMinutes: 8,
  },
];

export default connections;
