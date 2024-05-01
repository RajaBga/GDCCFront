import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConfirmationDialogService {
  private showDialogSubject = new Subject<boolean>();

  showDialog$ = this.showDialogSubject.asObservable();

  constructor() {}

  show(): void {
    this.showDialogSubject.next(true);
  }

  hide(): void {
    this.showDialogSubject.next(false);
  }
}
