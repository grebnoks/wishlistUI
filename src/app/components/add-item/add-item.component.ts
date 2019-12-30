import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {GiftControllerService} from '../../services/gift-controller.service';
import {Item} from '../../models/item.model';
import {Store} from '@ngxs/store';
import {AddGift} from '../../actions/gift.action';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  public addItemFormGroup: FormGroup;

  constructor(private store: Store) {
  }

  showAddItem = false;

  ngOnInit() {
    this.addItemFormGroup = new FormGroup({
      nameInput: new FormControl(),
      priceInput: new FormControl(),
      recipientInput: new FormControl(),
      locationInput: new FormControl()
    });
  }

  onSubmit() {
    const payload = new Item(
      this.addItemFormGroup.get('nameInput').value,
      this.addItemFormGroup.get('priceInput').value,
      this.addItemFormGroup.get('recipientInput').value,
      this.addItemFormGroup.get('locationInput').value
    );
    this.store.dispatch(new AddGift(payload));
  }

}
