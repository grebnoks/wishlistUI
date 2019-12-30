import {Component, OnInit} from '@angular/core';
import {Item} from '../../models/item.model';
import {GiftListState} from '../../state/giftList.state';
import {Observable} from 'rxjs';
import {Select, Store} from '@ngxs/store';
import {DeleteGift} from '../../actions/gift.action';
import {isNullOrUndefined} from 'util';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  wishList: Item[];
  isListEmpty = false;

  // TODO look into why it was erring by subscribing to the selector directly in the html
  @Select(GiftListState.getGiftList) wishList$: Observable<Item[]>;

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.wishList$.subscribe((test) => {
      this.wishList = test;
      console.log('wishlist change triggered:', this.wishList);
      this.isListEmpty = isNullOrUndefined(this.wishList) || (this.wishList.length === 0);
      console.log('wishlist change triggered:', this.isListEmpty);
    });
  }

  deleteItem(gift: Item) {
    console.log('delete button clicked gift:', gift);
    this.store.dispatch(new DeleteGift(gift.id));
  }
}
