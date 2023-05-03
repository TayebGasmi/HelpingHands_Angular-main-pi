import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DeleteCategoryReclamationComponent} from './delete-category-reclamation.component';

describe('DeleteCategoryReclamationComponent', () => {
  let component: DeleteCategoryReclamationComponent;
  let fixture: ComponentFixture<DeleteCategoryReclamationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteCategoryReclamationComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DeleteCategoryReclamationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
