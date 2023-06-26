import { Component, OnInit } from '@angular/core';
import { OnlineStoreService } from '../../services/online-store.service';
import { Product } from '../../interfaces';

@Component({
  selector: 'app-bestsellers-list',
  templateUrl: './bestsellers-list.component.html',
  styleUrls: ['./bestsellers-list.component.scss'],
})
export class BestsellersListComponent implements OnInit {
  title = 'itea_angular_advanceed';
  products: Product[] = [];

  constructor(private readonly _storeService: OnlineStoreService) {}

  ngOnInit(): void {
    this._storeService
      .getProducts()
      .subscribe((result: Product[]) => (this.products = result));
  }
}
