import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CategoryReclamationCardComponent} from './category-reclamation-card.component';

describe('CategoryReclamationCardComponent', () => {
  let component: CategoryReclamationCardComponent;
  let fixture: ComponentFixture<CategoryReclamationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoryReclamationCardComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CategoryReclamationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
