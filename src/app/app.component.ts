import {Component, OnInit} from '@angular/core';
import {DatabaseService} from './database.service';
import { IntervalObservable } from "rxjs/observable/IntervalObservable";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[DatabaseService]
})
export class AppComponent implements OnInit{
  title = 'app';
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
