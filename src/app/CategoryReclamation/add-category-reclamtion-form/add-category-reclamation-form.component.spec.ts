import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AddCategoryReclamationFormComponent} from './add-category-reclamation-form.component';

describe('AddCategoryReclamtionFormComponent', () => {
  let component: AddCategoryReclamationFormComponent;
  let fixture: ComponentFixture<AddCategoryReclamationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddCategoryReclamationFormComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AddCategoryReclamationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
