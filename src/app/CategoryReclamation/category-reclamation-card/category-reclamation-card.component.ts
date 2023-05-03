import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CategoryReclamation} from "../../models/CategoryReclamation";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {CategoryReclamationService} from "../../services/category-reclamation.service";
import {UpdateCategoryReclamationComponent} from "../update-category-reclamation/update-category-reclamation.component";
import {DeleteCategoryReclamationComponent} from "../delete-category-reclamation/delete-category-reclamation.component";

@Component({
  selector: 'app-category-reclamation-card',
  templateUrl: './category-reclamation-card.component.html',
  styleUrls: ['./category-reclamation-card.component.css']
})
export class CategoryReclamationCardComponent implements OnInit {
  @Input()
  category: CategoryReclamation;
  @Output()
  updateList: EventEmitter<void> = new EventEmitter();
  private dialogRef: MatDialogRef<UpdateCategoryReclamationComponent>;
  private dialogRefDelete: MatDialogRef<DeleteCategoryReclamationComponent>;

  constructor(private CategoryReclamationService: CategoryReclamationService, private dialog: MatDialog,) {
  }

  ngOnInit(): void {
  }

  openUpdateForm() {
    this.dialogRef = this.dialog.open(UpdateCategoryReclamationComponent, {
      data: this.category,
      height: '400px',
      width: '600px',
      position: {top: '50%vh', left: '50%vw'}
    });
    this.dialogRef.afterClosed().subscribe(result => {
      this.CategoryReclamationService.getCategories().subscribe(data => {
        this.updateList.emit();
      })
    });
  }

  openDeleteForm() {
    this.dialogRefDelete = this.dialog.open(DeleteCategoryReclamationComponent, {
      data: this.category,
      height: '400px',
      width: '600px',
      position: {top: '50%vh', left: '50%vw'}
    });
    this.dialogRefDelete.afterClosed().subscribe(result => {
      this.CategoryReclamationService.getCategories().subscribe(data => {
        this.updateList.emit();
      })
    });
  }
}
