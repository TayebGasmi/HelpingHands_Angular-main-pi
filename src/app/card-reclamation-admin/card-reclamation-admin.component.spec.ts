import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardReclamationAdminComponent } from './card-reclamation-admin.component';

describe('CardReclamationAdminComponent', () => {
  let component: CardReclamationAdminComponent;
  let fixture: ComponentFixture<CardReclamationAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardReclamationAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardReclamationAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
