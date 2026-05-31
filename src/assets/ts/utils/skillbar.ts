import { ProgressOptions } from '../../../types/skillbar';

class Progress implements ProgressOptions {
    total: number;
    color: string;
    width: number;
    height: number;
    timer: any = null;
    loaded: number = 0;
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
        this.width = element.width;
        this.height = element.height;
        this.refElement = element.parentNode as HTMLElement;
        this.total = parseInt(this.refElement.getAttribute("data-percent") || "0", 10);

        this.init();
    }

    init(): void { 
        this.timer = setInterval(() => { this.run(); }, 25); 
    }

    run(): void {
        const centerX = this.width / 2;
        const centerY = this.height / 2;
        const radius = (this.width / 2) - 5; // Subtract half of lineWidth

        // 1. Clear the canvas
        this.context.clearRect(0, 0, this.width, this.height);

        // 2. Draw the background track
        this.context.beginPath();
        this.context.arc(centerX, centerY, radius, 0, Math.PI * 2, false);
        this.context.strokeStyle = "#eeeeee";
        this.context.lineWidth = 10;
        this.context.stroke();

        // 3. Draw the progress arc
        this.context.beginPath();
        this.context.strokeStyle = this.color;
        this.context.lineWidth = 10;
        this.context.lineCap = 'round';
        
        // Calculate the end angle based on loaded percentage
        const endAngle = ((this.loaded / 100) * Math.PI * 2) + this.start;
        this.context.arc(centerX, centerY, radius, this.start, endAngle, false);
        this.context.stroke();

        // 4. Draw the percentage text
        this.context.textAlign = "center";
        this.context.textBaseline = "middle";
        this.context.fillStyle = "#333";
        this.context.font = "bold 14px 'Open Sans'";
        this.context.fillText(this.loaded + "%", centerX, centerY);

        if (this.loaded >= this.total) { 
            clearInterval(this.timer); 
        } else {
            this.loaded++;
        }
    }
}

class CircularSkillBar {
    bars: NodeListOf<HTMLElement>;

    constructor(elements: string) {
        this.bars = document.querySelectorAll(elements);
        if (this.bars.length > 0) { this.init(); }
    }

    init(): void { this.progress(); }

    progress(): void {
        this.bars.forEach((bar: HTMLElement) => {
            const color = bar.getAttribute("data-color") || "#FE4100";
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
