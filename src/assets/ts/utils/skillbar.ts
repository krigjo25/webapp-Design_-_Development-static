/* This document contains the Javascript of Circle bars */

class Progress {
    context: CanvasRenderingContext2D;
    refElement: HTMLElement;
    loaded: number = 0;
    start: number = 4.72;
    width: number;
    height: number;
    total: number;
    timer: any = null;
    diff: string = "0";
    color: string;

    constructor(element: HTMLCanvasElement, color: string) {
        const ctx = element.getContext("2d");
        if (!ctx) {
            throw new Error("Could not obtain 2D canvas context");
        }
        this.context = ctx;
        this.refElement = element.parentNode as HTMLElement;
        this.width = this.context.canvas.width;
        this.height = this.context.canvas.height;
        this.total = parseInt(this.refElement.getAttribute("data-percent") || "0", 10);
        this.color = color;
        this.init();
    }

    init(): void {
        this.timer = setInterval(() => {
            this.run();
        }, 25);
    }

    run(): void {
        this.diff = ((this.loaded / 100) * Math.PI * 2 * 10).toFixed(2);
        this.context.clearRect(0, 0, this.width, this.height);
        this.context.lineWidth = 10;
        this.context.fillStyle = "#000";
        this.context.strokeStyle = this.color;
        this.context.textAlign = "center";

        this.context.fillText(this.loaded + "%", this.width * 0.5, this.height * 0.5 + 2, this.width);
        this.context.beginPath();
        this.context.arc(35, 35, 30, this.start, (parseFloat(this.diff) / 10) + this.start, false);
        this.context.stroke();

        if (this.loaded >= this.total) {
            clearInterval(this.timer);
        }

        this.loaded++;
    }
}

class CircularSkillBar {
    bars: NodeListOf<HTMLElement>;
    tick: number = 25;
    color: string;

    constructor(elements: string, color: string) {
        this.bars = document.querySelectorAll(elements);
        this.color = color;
        if (this.bars.length > 0) {
            this.init();
        }
    }

    init(): void {
        this.progress();
    }

    progress(): void {
        let index = 0;
        const firstCanvas = this.bars[0].querySelector("canvas") as HTMLCanvasElement | null;
        if (firstCanvas) {
            new Progress(firstCanvas, this.color);
        }

        const timer = setInterval(() => {
            index++;
            if (index >= this.bars.length) {
                clearInterval(timer);
                return;
            }

            const canvas = this.bars[index].querySelector("canvas") as HTMLCanvasElement | null;
            if (canvas) {
                new Progress(canvas, this.color);
            }
        }, this.tick * 100);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    new CircularSkillBar("#bars .webdesign", "#FE4100"); // blood Orange
    new CircularSkillBar("#bars .program", "#000000");   // Blue/Black
    new CircularSkillBar("#bars .db", "#d30000");        // Red
    new CircularSkillBar("#bars .graphics", "#000000");  // Black
});