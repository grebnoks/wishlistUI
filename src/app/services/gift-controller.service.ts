import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Item} from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class GiftControllerService {

  constructor(private httpClient: HttpClient) {
  }

  findAll(): Observable<any> {
    console.log('calling findAll() at url:', environment.giftController);
    return this.httpClient.get(environment.giftController, {observe: 'response'}).pipe(map((response: HttpResponse<any>) => {
      console.log('response:', response);
      console.log('response.body:', response.body);
      return response.body;
    }));
  }

  addGift(gift: Item): Observable<any> {
    console.log('addGiftCallTargetUrl:', environment.giftController);
    console.log('addGiftCallRequest:', gift);
    return this.httpClient.post(environment.giftController, gift, {observe: 'response'}).pipe(map((response: HttpResponse<any>) => {
      console.log('response.body:', response.body);
      return response.body;
    }));
  }

  deleteGift(giftId: number): Observable<any> {
    console.log('calling deleteGift() at ', environment.giftController);
    return this.httpClient.delete(environment.giftController + '/' + giftId, {observe: 'response'}).pipe(
      map((response: HttpResponse<any>) => {
      console.log('deleteGift response.body:', response.body);
      return response.body;
    }));
  }
}
