import {Component, OnInit} from '@angular/core';
import {DatabaseService} from './database.service';

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
    this.loadPrices()
  }

  loadPrices(){
    this.database.getPrice()
      .subscribe(prices => this.cryptoPrices = prices.ticker);
  }
}
