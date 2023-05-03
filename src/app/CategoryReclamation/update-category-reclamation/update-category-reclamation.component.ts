import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {CategoryReclamationService} from "../../services/category-reclamation.service";
import {CategoryReclamation} from "../../models/CategoryReclamation";

@Component({
  selector: 'app-update-category-reclamation',
  templateUrl: './update-category-reclamation.component.html',
  styleUrls: ['./update-category-reclamation.component.css']
})
export class UpdateCategoryReclamationComponent {
  form: FormGroup

  constructor(
    public dialogRef: MatDialogRef<UpdateCategoryReclamationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CategoryReclamation, private formBuilder: FormBuilder, private CategoryReclamationService: CategoryReclamationService, private toastr: ToastrService
  ) {
  }

  showUpdate() {
    this.toastr.warning('!congratulation', 'reclamation category updated successfully!');
  }

  ngOnInit(): void {
    const formControls = {};
    formControls["name"] = [this.data.name, Validators.required];
    formControls["description"] = [this.data.description, Validators.required];
    this.form = this.formBuilder.group(formControls);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    if (this.form.valid) {
      // Submit form data here
      console.log(this.form.value);
      this.CategoryReclamationService.updateCategory({...this.data, ...this.form.value}).subscribe(data => {
        console.log(data)
        this.showUpdate()
        this.dialogRef.close();
      });
    }
  }
}
