import { createSignal, type Component, createEffect } from 'solid-js';

import { cuPopBus1, cuPopBus4 } from './data/cu-popbus';
import { pad } from './helpers/formatting'
import { Timetable } from './types/timetable';

const App: Component = () => {
    const [currentTime, setCurrentTime] = createSignal(new Date());
    const [nextOne1, setNextOne1] = createSignal<string[]>([]);
    const [nextOne4, setNextOne4] = createSignal<string[]>([]);

    setInterval(() => setCurrentTime(new Date()), 1000);

    createEffect(() => {
        const nextHour = new Date(currentTime().valueOf() + 60 * 60 * 1000);

        const getTime = (
            timetable: Timetable,
            when: Date = currentTime(),
            shouldRemovePast: boolean = when.getDay() === currentTime().getDay()
                && when.getHours() === currentTime().getHours()
        ) => timetable.timetable[when.getDay()]
            ?.[when.getHours()]
            ?.frequencies
            ?.filter((m: number) => !shouldRemovePast || m >= currentTime().getMinutes())
            ?? [];

        setNextOne1([
            ...getTime(cuPopBus1, undefined).map((m) => `${currentTime().getHours()}:${pad(m)}`),
            ...getTime(cuPopBus1, nextHour, false).map((m) => `${nextHour.getHours() % 24}:${pad(m)}`)
        ]);
        setNextOne4([
            ...getTime(cuPopBus4).map((m) => `${currentTime().getHours()}:${pad(m)}`),
            ...getTime(cuPopBus4, nextHour, false).map((m) => `${nextHour.getHours() % 24}:${pad(m)}`)
        ]);
    });

    return (
        <section style={{ padding: '2rem' }}>
            <h1>
                {currentTime().toLocaleDateString('en-gb', {
                    dateStyle: 'full',
                })}
                <br />
                {currentTime().toLocaleTimeString('en-gb', {
                    timeStyle: 'medium',
                })}
            </h1>
            <h2>CU 1</h2>
            <div>
                {nextOne1().join(', ') || 'Not found'}
            </div>

            <h2>CU 4</h2>
            <div>
                {nextOne4().join(', ') || 'Not found'}
            </div>
        </section>
    );
};

export default App;
