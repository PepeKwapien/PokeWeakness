import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  animations: [
    trigger('openClosed', [
      transition(':leave', [
        animate('500ms 0ms ease-in-out', style({ height: 0 })),
      ]),
    ]),
    trigger('visibleHidden', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('700ms', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class LandingPageComponent {
  constructor(private router: Router) {}

  public isOnRootPage(): boolean {
    return this.router.url === '/';
  }
}
