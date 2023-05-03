import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CategoryReclamation} from "../../models/CategoryReclamation";
import {FormBuilder} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {CategoryReclamationService} from "../../services/category-reclamation.service";

@Component({
  selector: 'app-delete-category-reclamation',
  templateUrl: './delete-category-reclamation.component.html',
  styleUrls: ['./delete-category-reclamation.component.css']
})
export class DeleteCategoryReclamationComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteCategoryReclamationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CategoryReclamation, private formBuilder: FormBuilder, private CategoryReclamationService: CategoryReclamationService, private toastr: ToastrService
  ) {
  }

  showDelete() {
    this.toastr.error('!congratulation', 'reclamation category delete successfully!');
  }

  ngOnInit(): void {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onDelete() {
    console.log(this.data.id);
    this.CategoryReclamationService.deleteCategory(this.data.id).subscribe(data => {
      console.log(data)
      this.showDelete()
      this.dialogRef.close();
    });
  }
}
