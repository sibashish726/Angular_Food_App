import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/model/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Foods[] {
    return [
      {
        id: 2023001,
        price: 349,
        name: 'Pizza',
        favorite: true,
        star: 4.8,
        tags: ['Fast food'],
        imageUrl: '/assets/1.jpg',
        cookTime: '20',
        origins: ['INDIA']
      },
      {
        id: 2023002,
        price: 309,
        name: 'Noodles',
        favorite: false,
        star: 4.8,
        tags: ['Fast food'],
        imageUrl: '/assets/2.jpg',
        cookTime: '25',
        origins: ['INDIA']
      },
      {
        id: 2023001,
        price: 349,
        name: 'salad',
        favorite: false,
        star: 4.8,
        tags: ['Fast food'],
        imageUrl: '/assets/3.jpg',
        cookTime: '20',
        origins: ['INDIA']
      },
      {
        id: 2023001,
        price: 299,
        name: 'Ramen',
        favorite: false,
        star: 4.8,
        tags: ['Fast food'],
        imageUrl: '/assets/4.jpg',
        cookTime: '20',
        origins: ['INDIA']
      },
      {
        id: 2023001,
        price: 249,
        name: 'Brownie',
        favorite: false,
        star: 4.8,
        tags: ['Fast food'],
        imageUrl: '/assets/5.jpg',
        cookTime: '20',
        origins: ['INDIA']
      },
      {
        id: 2023001,
        price: 129,
        name: 'Veg Roll',
        favorite: false,
        star: 4.8,
        tags: ['Fast food'],
        imageUrl: '/assets/6.jpg',
        cookTime: '20',
        origins: ['INDIA']
      },
      {
        id: 2023001,
        price: 449,
        name: 'Burger',
        favorite: false,
        star: 4.8,
        tags: ['Fast food'],
        imageUrl: '/assets/7.jpg',
        cookTime: '20',
        origins: ['INDIA']
      },
      {
        id: 2023001,
        price: 249,
        name: 'Biriyani',
        favorite: true,
        star: 4.8,
        tags: ['Fast food'],
        imageUrl: '/assets/8.jpg',
        cookTime: '20',
        origins: ['INDIA']
      }

    ]
  }
}
