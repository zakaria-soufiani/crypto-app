import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../shared/database.service';
import { IntervalObservable } from "rxjs/observable/IntervalObservable";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers:[DatabaseService]

})
export class NavbarComponent implements OnInit {

  public cryptoPrices;

  constructor(private database: DatabaseService){}

  ngOnInit(){
    this.loadPrices();
    //intervall to call api every 30 secs
    setInterval(() => this.loadPrices(), 30000);
  }

  loadPrices(){
    this.database.getPrice()
      .subscribe(prices => this.cryptoPrices = prices.ticker);
    console.log('called')
  }
}
