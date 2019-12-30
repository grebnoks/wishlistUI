import {State, Action, Selector, StateContext} from '@ngxs/store';
import {Item} from '../models/item.model';
import {AddGift, DeleteGift, UpdateGiftList} from '../actions/gift.action';
import {GiftControllerService} from '../services/gift-controller.service';
import {tap, catchError, mergeMap} from 'rxjs/operators';
import {Injectable} from '@angular/core';


export class GiftStateModel {
  gifts: Item[];
}

// @State<GiftStateModel>({
//   name: 'gift',
//   defaults: {
//     gifts: [
//       new Item(
//         'testGift1',
//         '12',
//         'user1',
//         'walmart.com'
//       ),
//       new Item(
//         'testGift2',
//         '43',
//         'user2',
//         'amazon.com'
//       )
//     ]
//   }
// })

@Injectable()
export class GiftListState {

  // constructor() {
  constructor(private giftService: GiftControllerService) {
  }

  // Get current gift list in store
  @Selector()
  static getGiftList(state: GiftStateModel) {
    console.log('state changed:', state);
    return state.gifts;
  }

  // Add a gift
  @Action(AddGift)
  add(ctx: StateContext<GiftStateModel>, action: AddGift) {
    return this.giftService.addGift(action.payload).pipe(
      // we use a tap here, since mutating the state is a side effect
      tap(() => {
          // on successful update of giftlist, get updated list

        }
      ), mergeMap((test) => {
        console.log('adding gift was successful. updating gift list from server');
        return ctx.dispatch(new UpdateGiftList());
      }),
      // if the post goes sideways we need to handle it
      catchError(error => {
        console.log('could not get add new gift error:' + error.toString());
        return error;
      }),
    );
  }

  // Delete a gift
  @Action(DeleteGift)
  delete(ctx: StateContext<GiftStateModel>, action: DeleteGift) {
    console.log('in delete action');
    return this.giftService.deleteGift(action.giftId).pipe(
      // we use a tap here, since mutating the state is a side effect
      tap(() => {
          // on successful update of giftlist, get updated list

        }
      ), mergeMap((test) => {
        console.log('deleting gift was successful. updating gift list from server');
        return ctx.dispatch(new UpdateGiftList());
      }),
      // if the post goes sideways we need to handle it
      catchError(error => {
        console.log('could not get delete gift error:' + error.toString());
        return error;
      }),
    );
  }

  @Action(UpdateGiftList)
  getUpdatedList(ctx: StateContext<GiftStateModel>) {
    // ngxs will subscribe to the post observable for you if you return it from the action
    return this.giftService.findAll().pipe(
      // we use a tap here, since mutating the state is a side effect
      tap((updatedGiftList) => {
          const state = ctx.getState();
          ctx.setState({
            ...state,
            gifts: updatedGiftList
          });
        }
      ),
      // if the post goes sideways we need to handle it
      catchError(error => {
        console.log('could not get updatedGiftList from server:' + error.toString());
        return error;
      }),
    );
  }
}
