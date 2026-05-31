/* This document contains the Javascript of Circle bars */

class Progress {
    total: number;
    color: string;
    width: number;
    
    height: number;
    timer: any = null;
    loaded: number = 0;
    diff: string = "0";
    start: number = 4.72;
    context: CanvasRenderingContext2D;
    refElement: HTMLElement;

    constructor(element: HTMLCanvasElement, color: string) {
        const ctx = element.getContext("2d");
        if (!ctx) {
            throw new Error("Could not obtain 2D canvas context");
        }
        this.context = ctx;
        this.color = color;
        this.width = this.context.canvas.width;
        this.height = this.context.canvas.height;
        this.refElement = element.parentNode as HTMLElement;
        this.total = parseInt(this.refElement.getAttribute("data-percent") || "0", 10);

        this.init();
    }

    init(): void { this.timer = setInterval(() => { this.run(); }, 25); }

    run(): void {
        this.context.lineWidth = 10;
        this.context.textAlign = "center";
        this.context.fillStyle = "#000";
        this.context.strokeStyle = this.color;

        this.context.stroke();
        this.context.beginPath();
        this.context.clearRect(0, 0, this.width, this.height);
        this.diff = ((this.loaded / 100) * Math.PI * 2 * 10).toFixed(2);
        this.context.arc(35, 35, 30, this.start, (parseFloat(this.diff) / 10) + this.start, false);
        this.context.fillText(this.loaded + "%", this.width * 0.5, this.height * 0.5 + 2, this.width);

        if (this.loaded >= this.total) { clearInterval(this.timer); }

        this.loaded++;
    }
}

class CircularSkillBar {
    tick: number = 25;
    bars: NodeListOf<HTMLElement>;

    constructor(elements: string) {
        this.bars = document.querySelectorAll(elements);
        // color will be read from each bar's data-color attribute
        if (this.bars.length > 0) { this.init(); }
    }

    init(): void { this.progress(); }

    progress(): void {
        this.bars.forEach((bar) => {
            const color = bar.getAttribute("data-color") || "#FE4100"; // fallback color
            const canvas = bar.querySelector("canvas") as HTMLCanvasElement | null;
            if (!canvas) {
                console.warn("CircularSkillBar: missing canvas in bar", bar);
                return;
            }
            
            new Progress(canvas, color);
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    new CircularSkillBar("#bars [data-percent]");
});