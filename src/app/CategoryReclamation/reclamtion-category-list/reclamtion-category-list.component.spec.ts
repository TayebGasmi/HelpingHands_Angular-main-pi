import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ReclamtionCategoryListComponent} from './reclamtion-category-list.component';

describe('ReclamtionCategoryListComponent', () => {
  let component: ReclamtionCategoryListComponent;
  let fixture: ComponentFixture<ReclamtionCategoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReclamtionCategoryListComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ReclamtionCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
