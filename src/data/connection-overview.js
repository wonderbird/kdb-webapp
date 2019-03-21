const connections = [
  {
    origin: 'Rösrath-Stümpen',
    destination: 'Overath',

    scheduledDeparture: new Date('2019-02-01T06:09:00.000Z'),
    expectedDeparture: new Date('2019-02-01T06:09:00.000Z'),

    scheduledArrival: new Date('2019-02-01T06:29:00.000Z'),
    expectedArrival: new Date('2019-02-01T06:29:00.000Z'),
  },
  {
    origin: 'Rösrath-Stümpen',
    destination: 'Köln Trimbornstraße',

    scheduledDeparture: new Date('2019-02-01T06:19:00.000Z'),
    expectedDeparture: new Date('2019-02-01T06:26:00.000Z'),

    scheduledArrival: new Date('2019-02-01T06:30:00.000Z'),
    expectedArrival: new Date('2019-02-01T06:38:00.000Z'),
  },
];

export default connections;
