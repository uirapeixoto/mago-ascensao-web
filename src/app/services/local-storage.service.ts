import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setItem(name : string, value : string){
    localStorage.setItem(name, value);
  }

  removeItem(name : string){
    localStorage.removeItem(name);
  }

  readItem(name: string){
    localStorage.getItem(name);
  }

  clear() {
    localStorage.clear();
  }
}
