import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, Validators} from "@angular/forms";
import {CategoryReclamationService} from "../../services/category-reclamation.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-add-category-reclamtion-form',
  templateUrl: './add-category-reclamation-form.component.html',
  styleUrls: ['./add-category-reclamation-form.component.css']
})
export class AddCategoryReclamationFormComponent implements OnInit {
  form: any;

  constructor(
    public dialogRef: MatDialogRef<AddCategoryReclamationFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder, private CategoryReclamationService: CategoryReclamationService, private toastr: ToastrService
  ) {
  }

  showSuccess() {
    this.toastr.success('!congratulation', 'reclamation category add successfully!');
  }

  ngOnInit(): void {
    const formControls = {};
    formControls["name"] = ["", Validators.required];
    formControls["description"] = ["", Validators.required];
    this.form = this.formBuilder.group(formControls);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    if (this.form.valid) {
      // Submit form data here
      console.log(this.form.value);
      this.CategoryReclamationService.addCategory(this.form.value).subscribe(data => {
        console.log(data)
        this.showSuccess()
        this.dialogRef.close();
      });
    }
  }

}
