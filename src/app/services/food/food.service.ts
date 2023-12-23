import { Injectable } from '@angular/core';
import { Tag } from 'src/app/shared/models/Tag';
import { Foods } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}

  getFoodById(id:number): Foods{
    return this.getAll().find(food => food.id == id)!;
  }

  getAllFoodByTag(tag: string): Foods[] {
    if (tag == 'All') {
      return this.getAll();
    } else {
      return this.getAll().filter(food =>
        food.tags?.includes(tag));
    }
  }

  getAllTag():Tag[]{
    return [
      {name:'All', count:14},
      {name:'FastFood', count:4},
      {name:'Pizza', count:2},
      {name:'Lunch', count:3},
      {name:'SlowFood', count:2},
      {name:'Hamburg', count:1},
      {name:'Fry', count:1},
      {name:'Soup', count:1},

    ]
  }

  getAll(): Foods[] {
    return [
      {
        id: 1,
        name: 'Pizza Pepperoni',
        cookTime: '10-20',
        price: 10,
        favourite: true,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/food1.jpeg',
        tags: ['Pizza','FastFood'],
      },
      {
        id: 2,
        name: 'Burger Pepperoni',
        cookTime: '10-20',
        price: 10,
        favourite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/food2.jpeg',
        tags: ['Burger','FastFood'],
      },
      {
        id: 3,
        name: 'Noodles Pepperoni',
        cookTime: '10-20',
        price: 10,
        favourite: true,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/food3.jpeg',
        tags: ['Noodles','Lunch'],
      },
      {
        id: 4,
        name: 'Sandwich Pepperoni',
        cookTime: '10-20',
        price: 10,
        favourite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/food6.jpeg',
        tags: ['Sandwich','SlowFood','Soup'],
      },
      {
        id: 5,
        name: 'Salad Pepperoni',
        cookTime: '10-20',
        price: 10,
        favourite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/food7.jpeg',
        tags: ['Salad','Hamburg'],
      },
      {
        id: 6,
        name: 'Dry  Fruit',
        cookTime: '10-20',
        price: 10,
        favourite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/food8.jpeg',
        tags: ['Dry','Fry'],
      },
    ];
  }
}
