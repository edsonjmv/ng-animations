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
  images: string[] = [];

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

  toggleImages() {
    const images = [
      'https://myrealdomain.com/images/juventus-logo-png-6.png',
      'https://www.stickpng.com/assets/images/584ad186b519ea740933a89e.png',
      'https://cdn.freebiesupply.com/logos/large/2x/club-atletico-river-plate-logo-png-transparent.png',
      'https://seeklogo.com/images/C/Carabobo_F_C_-logo-E464EC0C73-seeklogo.com.png',
      'https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c4e7.png'
    ];

    this.images = this.images.length ? [] : images;
  }
}
