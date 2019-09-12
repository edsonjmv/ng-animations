import { Component } from '@angular/core';
import { fadeAnimation } from '../animations/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation]
})
export class AppComponent {
  show: boolean = true;
}
