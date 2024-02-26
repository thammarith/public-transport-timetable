import { _every, entries, every } from "../helpers/timetable"

const cuPopBus1Weekday = {
    6: every(15, 30, 45),
    7: every(6),
    8: every(6),
    9: every(9),
    10: every(9),
    11: every(9),
    12: every(6),
    13: every(9),
    14: every(9),
    15: every(9),
    16: every(6),
    17: every(6),
    18: every(6),
    19: entries([0, 15, 45]),
    20: every(30, 15),
    21: every(30, 15),
}

const cuPopBus4Weekday = {
    6: entries([40, 55]),
    7: entries([3, 10, 18, 25, 33, 40, 48, 55]),
    8: entries([3, 10, 18, 25, 33, 40, 48, 55]),
    9: every(12, 3),
    10: every(12, 3),
    11: every(12, 3),
    12: entries([3, 10, 18, 25, 33, 40, 48, 55]),
    13: every(12, 3),
    14: every(12, 3),
    15: every(12, 3),
    16: entries([3, 10, 18, 25, 33, 40, 48, 55]),
    17: entries([3, 10, 18, 25, 33, 40, 48, 55]),
    18: entries([3, 10, 18, 25, 33, 40, 48, 55]),
    19: entries([10, 40]),
    20: entries([10, 40]),
    21: entries([10, 40]),
}

export const cuPopBus1 = {
    id: 'cuPopBus1',
    name: 'CU Pop Bus 1',
    timetable: {
        1: cuPopBus1Weekday,
        2: cuPopBus1Weekday,
        3: cuPopBus1Weekday,
        4: cuPopBus1Weekday,
        5: cuPopBus1Weekday,
    }
};

export const cuPopBus4 = {
    id: 'cuPopBus4',
    name: 'CU Pop Bus 4',
    timetable: {
        1: cuPopBus4Weekday,
        2: cuPopBus4Weekday,
        3: cuPopBus4Weekday,
        4: cuPopBus4Weekday,
        5: cuPopBus4Weekday,
    }
};
