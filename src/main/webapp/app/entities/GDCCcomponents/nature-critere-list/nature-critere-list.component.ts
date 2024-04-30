import { Component, OnInit } from '@angular/core';
import { Naturecritere } from '../../GDCCentities/naturecritere';
import { NaturecritereService } from '../../GDCCservices/naturecritere.service';

@Component({
  selector: 'jhi-nature-critere-list',
  templateUrl: './nature-critere-list.component.html',
  styleUrls: ['./nature-critere-list.component.scss'],
})
export class NatureCritereListComponent implements OnInit {
  natureCriteres: Naturecritere[] = [];

  constructor(private naturecritereService: NaturecritereService) {}

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
}
