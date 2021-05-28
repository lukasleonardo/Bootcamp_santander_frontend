import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Stock from '../shared-components/model/stock-model'

@Injectable({
  providedIn: 'root'
})
export class dashboardService {

  readonly baseUrl = "https://bootcampsantander.herokuapp.com/bootcamp"
  constructor( private http: HttpClient) { }

    async getStocks(): Promise<Stock[]> {
      return this.http.get<Stock[]>( `${this.baseUrl}/stock` ).toPromise();

    }


    /*async getStock()*/

}
