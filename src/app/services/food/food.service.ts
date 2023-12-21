import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}

  getAll(): string[] {
    return [
      '/assets/food1.jpeg',
      '/assets/food2.jpeg',
      '/assets/food3.jpeg',
      '/assets/food4.jpeg',
      '/assets/food5.jpeg',
      '/assets/food6.jpeg',
      '/assets/food7.jpeg',
      '/assets/food8.jpeg',
    ];
  }
}
