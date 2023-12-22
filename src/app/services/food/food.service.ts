import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}

  getAll(): Foods[]{
    return [
      {
        id:1,
        name:'Pizza Pepperoni',
        cookTime:'10-20',
        price:10,
        favourite:true,
        origins:['italy'],
        stars:4.5,
        imageUrl:'/assets/food1.jpeg',
        tags:['FastFood','Pizza','Lunch']
      },
      {
        id:2,
        name:'Burger Pepperoni',
        cookTime:'10-20',
        price:10,
        favourite:false,
        origins:['italy'],
        stars:4.5,
        imageUrl:'/assets/food2.jpeg',
        tags:['FastFood','Pizza','Lunch']
      },
      {
        id:3,
        name:'Noodles Pepperoni',
        cookTime:'10-20',
        price:10,
        favourite:true,
        origins:['italy'],
        stars:4.5,
        imageUrl:'/assets/food3.jpeg',
        tags:['FastFood','Pizza','Lunch']
      },
      {
        id:4,
        name:'Sandwich Pepperoni',
        cookTime:'10-20',
        price:10,
        favourite:false,
        origins:['italy'],
        stars:4.5,
        imageUrl:'/assets/food6.jpeg',
        tags:['FastFood','Pizza','Lunch']
      },
      {
        id:5,
        name:'Sandwich Pepperoni',
        cookTime:'10-20',
        price:10,
        favourite:false,
        origins:['italy'],
        stars:4.5,
        imageUrl:'/assets/food7.jpeg',
        tags:['FastFood','Pizza','Lunch']
      },
      {
        id:6,
        name:'Sandwich Pepperoni',
        cookTime:'10-20',
        price:10,
        favourite:false,
        origins:['italy'],
        stars:4.5,
        imageUrl:'/assets/food8.jpeg',
        tags:['FastFood','Pizza','Lunch']
      }
    ];
  }
}
