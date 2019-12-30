import {Item} from '../models/item.model';

export class AddGift {
  static readonly type = '[Gift] AddGift';

  constructor(public payload: Item) {
  }
}

export class DeleteGift {
  static readonly type = '[Gift] DeleteGift';

  constructor(public giftId: number) {
    // console.log('in delete gift action constructor');
  }
}

export class UpdateGiftList {
  static readonly type = '[Gift] UpdateGiftList';

  constructor() {
    console.log('in UpdateGiftList constructor');
  }
}
