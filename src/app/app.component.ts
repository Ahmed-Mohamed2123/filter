import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  searchTerm: string;

  product: any = [
    { name: 'one', price: '12' },
    { name: 'two', price: '16' },
    { name: 'three', price: '20' },
    { name: 'four', price: '80' },
    { name: 'five', price: '10' },
  ];
}
