const voices = {
  dispatch: 'Joanna',
  chief: 'Brian',
  engine2: 'Joey',
  truck1: 'Kendra',
  engine3: 'Geraint'
}

export const speeches = {
  firstAlarm: {
    voice: voices.dispatch,
    text: 'Structure fire Engine 1, Engine 2, Engine 3, Truck 1, Truck 2, Battalion 1 623 Luna Park. Repeating, structure fire Engine 1, Engine 2, Engine 3, Truck 1, Truck 2, Battalion 1 623 Luna Park. Caller states smoke in the building.'
  },
  secondAlarmResponse: {
    voice: voices.dispatch,
    text: 'Dispatch copies, second alarm requested.'
  },
  thirdAlarmResponse: {
    voice: voices.dispatch,
    text: 'Dispatch copies, third alarm requested.'
  },
  engine2Arrival: {
    voice: voices.engine2,
    text: 'Engine 2 on scene staged requesting an assignment.'
  },
  truck1Arrival: {
    voice: voices.truck1,
    text: 'Truck 1 on scene staged requesting an assignment.'
  },
  engine3Arrival: {
    voice: voices.engine3,
    text: 'Engine 3 on scene staged requesting an assignment.'
  },
  assignment: {
    text: 'Luna command from Engine 2. I copy, I will be ',
    appendGroup: true
  },
  incident: {
    voice: voices.truck1,
    text: 'Command from Ventilation. Firefighter has been injured on a ground ladder that has slipped, he rode the ladder to the ground and hit his head. He is unconscious.'
  },
  chiefArrival: {
    voice: voices.chief,
    text: 'Give me a transfer of command report.'
  }
}
