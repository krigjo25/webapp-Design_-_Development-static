export interface VideoState {
    volume: number;
    duration: number;
    currentTime: number;
}

export type TimeFormatter = (seconds: number) => string;
