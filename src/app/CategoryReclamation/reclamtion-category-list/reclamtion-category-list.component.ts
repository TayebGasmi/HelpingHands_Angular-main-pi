import {Component, OnInit} from '@angular/core';
import {CategoryReclamationService} from "../../services/category-reclamation.service";
import {CategoryReclamation} from "../../models/CategoryReclamation";
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {
  AddCategoryReclamationFormComponent
} from "../add-category-reclamtion-form/add-category-reclamation-form.component";
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-reclamtion-category-list',
  templateUrl: './reclamtion-category-list.component.html',
  styleUrls: ['./reclamtion-category-list.component.css']
})
export class ReclamtionCategoryListComponent implements OnInit {
  reclamationCategories: CategoryReclamation[] = []
  list: CategoryReclamation[] = [];
  pageSize = 10;
  pageIndex = 0;
  searchText: string = "";
  private dialogRef: MatDialogRef<AddCategoryReclamationFormComponent>;

  constructor(private CategoryReclamationService: CategoryReclamationService, private dialog: MatDialog,) {
  }

  ngOnInit(): void {
    this.getCategories()

  }

  openAddForm() {
    this.dialogRef = this.dialog.open(AddCategoryReclamationFormComponent, {
      data: {name: "name", description: "description"},
    });
    this.dialogRef.afterClosed().subscribe(result => {
      this.CategoryReclamationService.getCategories().subscribe(data => {
        this.reclamationCategories = data
      })
    });
  }


  getCategories() {
    this.CategoryReclamationService.getCategories().subscribe(data => {
      this.reclamationCategories = data
    })
  }

  handlePageEvent($event: PageEvent) {
    this.pageIndex = $event.pageIndex;
    this.pageSize = $event.pageSize;
  }

  getCategoryList() {
    if (this.searchText != "") {
      return this.reclamationCategories.filter((category) => {
        return category.name.toLocaleLowerCase().match(this.searchText.toLocaleLowerCase())
      }).slice(this.pageIndex * this.pageSize, this.pageIndex * this.pageSize + this.pageSize);
    }
    return this.reclamationCategories.slice(this.pageIndex * this.pageSize, this.pageIndex * this.pageSize + this.pageSize);
  }
}
