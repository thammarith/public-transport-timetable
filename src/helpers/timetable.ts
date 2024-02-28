const build = (frequencies: number[]) => ({ frequencies });

export const _every = (frequency: number, start: number = 0, end: number = 59) =>
    Array(60)
        .fill(0)
        .map((_, i) => i)
        .filter((m) => m % frequency === 0)
        .map((m) => m + start)
        .filter((m) => start <= m && m <= end);

export const every = (frequency: number, start: number = 0, end: number = 59) => build(_every(frequency, start, end));
export const entries = build;
