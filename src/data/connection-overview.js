const connections = [
  {
    origin: {
      station: 'Rösrath-Stümpen',
      scheduledTime: new Date('2019-02-01T06:09:00.000Z'),
      expectedTime: new Date('2019-02-01T06:09:00.000Z'),
      delayMinutes: 0,
    },

    destination: {
      station: 'Overath',
      scheduledTime: new Date('2019-02-01T06:29:00.000Z'),
      expectedTime: new Date('2019-02-01T06:29:00.000Z'),
      delayMinutes: 0,
    },
  },
  {
    origin: {
      station: 'Rösrath-Stümpen',
      scheduledTime: new Date('2019-02-01T06:19:00.000Z'),
      expectedTime: new Date('2019-02-01T06:26:00.000Z'),
      delayMinutes: 7,
    },

    destination: {
      station: 'Köln Trimbornstraße',
      scheduledTime: new Date('2019-02-01T06:30:00.000Z'),
      expectedTime: new Date('2019-02-01T06:38:00.000Z'),
      delayMinutes: 8,
    },
  },
];

export default connections;
