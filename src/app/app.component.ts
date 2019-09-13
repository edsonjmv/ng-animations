import { Component } from '@angular/core';
import { fadeAnimation, listAnimation } from '../animations/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation, listAnimation]
})
export class AppComponent {
  show: boolean = true;
  items: number[] = [];

  toggleList() {
    this.items = this.items.length ? [] : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  }

  addItem() {
    const next = this.items.length + 1;
    this.items = [ ...this.items, next ];
  }

  removeItem() {
    this.items.pop();
  }
}
