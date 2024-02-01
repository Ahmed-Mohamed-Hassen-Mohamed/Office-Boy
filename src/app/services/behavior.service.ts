import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehaviorService {

  private dataSubject = new BehaviorSubject<string>('Initial Value');
  constructor() { }

  data$ = this.dataSubject.asObservable();

  // Method to update the data
  updateData(newValue: any) {
    this.dataSubject.next(newValue);
  }
}
