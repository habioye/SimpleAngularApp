import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemserviceService {

  constructor() { 

  }

  getItems():string[] {
    let list = ["computer", "table", "lamp", "Air Purifier"];
    return list;
  }
}
