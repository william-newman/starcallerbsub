import { Component } from '@angular/core';

@Component({
  selector: 'app-photography',
  standalone: true,
  imports: [],
  templateUrl: './photography.component.html',
  styleUrl: './photography.component.scss'
})
export class PhotographyComponent {
  hasScrolled = false;
  hasTriggered = false;


  toggleScrollHinter(bool: boolean) {
    if (!this.hasTriggered) {
      this.hasScrolled = bool;
      this.hasTriggered = true;
    }
  }
}
