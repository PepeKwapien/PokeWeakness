import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-progress-bar',
    templateUrl: './progress-bar.component.html',
    styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent {
    @Input() value: number = 0;
    @Input() max: number = 120;

    public get fillPercentage(): number {
        return Math.min((this.value / this.max) * 100, 100);
    }

    public get statClass(): string {
        if (this.fillPercentage < 35) {
            return 'weak';
        } else if (this.fillPercentage < 70) {
            return 'average';
        } else if (this.fillPercentage < 90) {
            return 'strong';
        } else {
            return 'epic';
        }
    }
}

