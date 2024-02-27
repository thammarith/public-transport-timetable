import { createSignal, type Component, createEffect } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';
import { cuPopBus1, cuPopBus4 } from './data/cu-popbus';

const App: Component = () => {
    console.log(cuPopBus1);

    const [currentTime, setCurrentTime] = createSignal(new Date());
    const [nextOne1, setNextOne1] = createSignal<number[]>([]);
    const [nextOne4, setNextOne4] = createSignal<number[]>([]);

    setInterval(() => setCurrentTime(new Date()), 1000);

    createEffect(() => {
        const getTime = (_: any) =>
            _.timetable[currentTime().getDay()]?.[currentTime().getHours()]?.frequencies?.filter(
                (m: number) => m >= currentTime().getMinutes()
            );

        setNextOne1(getTime(cuPopBus1));
        setNextOne4(getTime(cuPopBus4));
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
                {nextOne1()
                    .map((_) => `${currentTime().getHours()}:${_}`)
                    .join(', ') || 'Not found'}
            </div>

            <h2>CU 4</h2>
            <div>
                {nextOne4()
                    .map((_) => `${currentTime().getHours()}:${_}`)
                    .join(', ') || 'Not found'}
            </div>
        </section>
    );
};

export default App;
