import { dashboardService } from './../dashboard.service';
import { Component, OnInit } from '@angular/core';
import Stock from 'src/app/shared-components/model/stock-model'

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {

  stocks: Stock[] = [];

  constructor(private dashboardService: dashboardService) {
  }

  ngOnInit(): void {
    this.fetchStocks();
  }


  async fetchStocks(): Promise<void> {

    this.stocks = await this.dashboardService.getStocks();
    console.log(this.stocks);

  }


}
