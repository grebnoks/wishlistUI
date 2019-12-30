import {Component, OnInit} from '@angular/core';
import {GiftControllerService} from './services/gift-controller.service';
import {UpdateGiftList} from './actions/gift.action';
import {Store} from '@ngxs/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private giftService: GiftControllerService,
              private store: Store) {
  }

  user = 'demo user';

  ngOnInit(): void {
    this.store.dispatch(new UpdateGiftList());
  }
}
