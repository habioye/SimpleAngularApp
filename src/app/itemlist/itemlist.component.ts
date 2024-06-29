import { Component } from '@angular/core';
import { ItemserviceService } from '../itemservice.service';

@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrl: './itemlist.component.css'
})
export class ItemlistComponent {
    title = "List of my Items";
    items;
    constructor(private srv: ItemserviceService) {
      // let srv = new ItemserviceService();
      this.items = srv.getItems();
    }
}
