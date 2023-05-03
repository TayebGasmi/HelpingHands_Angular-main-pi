import {ComponentFixture, TestBed} from '@angular/core/testing';

import {UpdateCategoryReclamationComponent} from './update-category-reclamation.component';

describe('UpdateCategoryReclamationComponent', () => {
  let component: UpdateCategoryReclamationComponent;
  let fixture: ComponentFixture<UpdateCategoryReclamationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateCategoryReclamationComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(UpdateCategoryReclamationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
