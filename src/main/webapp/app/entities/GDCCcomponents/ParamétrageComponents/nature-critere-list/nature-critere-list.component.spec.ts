import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NatureCritereListComponent } from './nature-critere-list.component';

describe('NatureCritereListComponent', () => {
  let component: NatureCritereListComponent;
  let fixture: ComponentFixture<NatureCritereListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NatureCritereListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NatureCritereListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
