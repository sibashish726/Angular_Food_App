import { Component } from '@angular/core';
import { Foods } from '../shared/model/food';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent {
  food!:Foods;

  constructor(private fs: FoodService, private router:ActivatedRoute){
    router.params.subscribe((params) => {
      if(params['id'])
        this.food= fs.getFoodById(params['id'])
    })
  }
  
}
