import { AfterContentInit, afterNextRender, AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { trigger, style, animate, transition } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { SocialsComponent } from './main/modules/socials/socials.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet, FormsModule, ReactiveFormsModule, CommonModule, SocialsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    trigger(
      'sidebarAnimation',
      [
        transition(
          ':enter',
          [
            style({ width: 0, opacity: 0 }),
            animate('500ms ease-out',
              style({ width: '13vw', opacity: 1 }))
          ]
        ),
        transition(
          ':leave',
          [
            style({ width: '13vw', opacity: 1 }),
            animate('500ms ease-in',
              style({ width: 0, opacity: 0 }))
          ]
        )
      ]
    ),
    trigger(
      'mobileSidebarAnimation',
      [
        transition(
          ':enter',
          [
            style({ width: 0, opacity: 0 }),
            animate('500ms ease-out',
              style({ width: '100vw', opacity: 1 }))
          ]
        ),
        transition(
          ':leave',
          [
            style({ width: '100vw', opacity: 1 }),
            animate('500ms ease-in',
              style({ width: 0, opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class AppComponent {
  packageVersion = require('../../package.json').version;
  version = '';
  innerWidth = 0;
  innerHeight = 0;
  sidebarToggled: boolean;
  burgerForm = new FormGroup({
    hamburgerCheck: new FormControl(false)
  });

  constructor() {
    this.version = `v` + this.packageVersion;
    this.sidebarToggled = false;

    afterNextRender(() => {
      if (window?.MediaDeviceInfo) {
        this.innerWidth = window?.innerWidth;
        this.innerHeight = window?.innerHeight;
      }
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.innerWidth = window?.innerWidth;
    this.innerHeight = window?.innerHeight;
  }

  toggleSidebar() {
    this.burgerForm.setValue({
      hamburgerCheck: !this.burgerForm.value.hamburgerCheck?.valueOf()
    });
    this.sidebarToggled = !this.sidebarToggled;
  }
}
