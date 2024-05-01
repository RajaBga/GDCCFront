import { Component, Input, OnInit } from '@angular/core';
import { ConfirmationDialogService } from '../../GDCCservices/confirmation-dialog.service';

@Component({
  selector: 'jhi-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss'],
})
export class ConfirmationDialogComponent implements OnInit {
  showDialog: boolean = false;

  constructor(private confirmationDialogService: ConfirmationDialogService) {}

  ngOnInit(): void {
    this.confirmationDialogService.showDialog$.subscribe(show => {
      this.showDialog = show;
    });
  }

  confirm(): void {
    this.confirmationDialogService.hide();
  }

  cancel(): void {
    this.confirmationDialogService.hide();
  }
}
