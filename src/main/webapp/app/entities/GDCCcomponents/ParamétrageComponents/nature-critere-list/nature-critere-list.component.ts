import { Component, OnInit } from '@angular/core';
import { Naturecritere } from '../../../GDCCentities/naturecritere';
import { NaturecritereService } from '../../../GDCCservices/naturecritere.service';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { ConfirmationDialogService } from '../../../GDCCservices/confirmation-dialog.service';

@Component({
  selector: 'jhi-nature-critere-list',
  templateUrl: './nature-critere-list.component.html',
  styleUrls: ['./nature-critere-list.component.scss'],
})
export class NatureCritereListComponent implements OnInit {
  natureCriteres: Naturecritere[] = [];

  constructor(
    private naturecritereService: NaturecritereService,
    private library: FaIconLibrary,
    private confirmationDialogService: ConfirmationDialogService
  ) {
    this.library.addIcons(faPenToSquare);
  }

  ngOnInit(): void {
    this.fetchNatureCriteres();
  }

  fetchNatureCriteres(): void {
    this.naturecritereService.getAllNaturecriteres().subscribe(
      natureCriteres => {
        this.natureCriteres = natureCriteres.content; // Assuming the content property holds the array of nature critere
      },
      error => {
        console.error('Error fetching nature criteres:', error);
      }
    );
  }

  deleteNatureCritere(id: number, event: Event): void {
    // Open confirmation dialog
    event.stopPropagation();
    this.confirmationDialogService.show();
    console.log('Calling ConfirmationDialogService.show() is done');
    this.confirmationDialogService.showDialog$.subscribe(confirm => {
      if (confirm) {
        // Call service to delete nature critere
        this.naturecritereService.deleteNaturecritere(id).subscribe(
          () => {
            // Remove the deleted item from the list
            this.natureCriteres = this.natureCriteres.filter(item => item.natureCritereId !== id);
            console.log('Nature critere deleted successfully');
          },
          error => {
            console.error('Error deleting nature critere:', error);
          }
        );
      }
    });
  }
}
