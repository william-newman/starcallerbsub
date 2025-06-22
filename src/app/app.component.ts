import { afterNextRender, Component, HostListener } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
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

  toggleCheckbox() {
    this.burgerForm.setValue({
      hamburgerCheck: !this.burgerForm.value.hamburgerCheck?.valueOf()
    });
    this.sidebarToggled = !this.sidebarToggled;
    console.log(this.sidebarToggled);
    
  }
}
