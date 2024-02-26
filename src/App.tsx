import { createSignal, type Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';
import { cuPopBus1, cuPopBus4 } from './data/cu-popbus';

const App: Component = () => {
    console.log(cuPopBus1);

    const [currentTime, setCurrentTime] = createSignal(new Date());

    setInterval(() => setCurrentTime(new Date()), 1000);

    const getTime = (_: any) => _.timetable[currentTime().getDay()]
      ?.[currentTime().getHours()]
      ?.frequencies
      ?.filter((m: number) => m >= currentTime().getMinutes());

    const nextOne1 = getTime(cuPopBus1)
    const nextOne4 = getTime(cuPopBus4)

    return (
        <section style={{ padding: '2rem'}}>
            <h1>
                {currentTime().toLocaleDateString('de-de', {
                    dateStyle: 'full',
                })}
                <br />
                {currentTime().toLocaleTimeString('de-de', {
                    timeStyle: 'medium',
                })}
            </h1>
            <h2>CU 1</h2>
            <div>{JSON.stringify(nextOne1) || 'NOT FOUND'}</div>

            <h2>CU 4</h2>
            <div>{JSON.stringify(nextOne4) || 'NOT FOUND'}</div>
        </section>
    );
};

export default App;
