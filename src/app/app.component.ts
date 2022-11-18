import { shoppingList } from './models/shopping.model';
import { Component, OnInit } from '@angular/core';
import { ListService } from './service/shoppingList.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'HartIntercivicAngular';
  list: any;
  data: number =1000;


  constructor(private shopingLists: ListService ){

  }
  ngOnInit(): void{
    this.getShoppingList();
    const timer = interval(1000);
    timer.subscribe((data)=> 
    {
      this.data =1000 - data;

    });
  }

  getShoppingList(){
    this.shopingLists.getShoppingList().subscribe(response => {
      //console.log(response);
      this.list= response;
    });
  }

}
