interface Schedule {
    [key: number]: {
        frequencies: number[];
    };
}

export interface Timetable {
    id: string;
    name: string;
    timetable: {
        [key: number]: Schedule;
    };
}
