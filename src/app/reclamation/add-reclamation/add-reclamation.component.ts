import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {ReclamationService} from "../../services/reclamation.service";
import {CategoryReclamation} from "../../models/CategoryReclamation";
import {CategoryReclamationService} from "../../services/category-reclamation.service";

@Component({
  selector: 'app-add-reclamation',
  templateUrl: './add-reclamation.component.html',
  styleUrls: ['./add-reclamation.component.css']
})
export class AddReclamationComponent implements OnInit {
  form: any;
  selectedFile:File=null;
  categories: CategoryReclamation[]=[
  ];

  constructor(
    public dialogRef: MatDialogRef<AddReclamationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder, private reclamationService: ReclamationService, private toastr: ToastrService,
    private categoryReclamationService:CategoryReclamationService
  ) {
  }

  showSuccess() {
    this.toastr.success('!congratulation', 'reclamation  add successfully!');
  }

  ngOnInit(): void {
    const formControls = {};
    formControls["title"] = ["", Validators.required];
    formControls["description"] = ["", Validators.required];
    formControls["category"] = ["", Validators.required];
    this.form = this.formBuilder.group(formControls);
    this.categoryReclamationService.getCategories().subscribe(data=>{
      this.categories=data;
    }
    )
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    if (this.form.valid) {
      // Submit form data here
      const formData = new FormData()
      formData.append('title', this.form.value.title)
      formData.append('description', this.form.value.description)
      this.selectedFile && formData.append('file', this.selectedFile)


      this.reclamationService.addReclamation(formData).subscribe(data => {
        this.categories.forEach((category, index) => {
          this.reclamationService.assignReclamationToCategory(data.id,category.id).subscribe(data => {
            console.log(data);
          }
          )

        });

        console.log(data);
        this.showSuccess()
        this.dialogRef.close();
      });
    }
  }
  public onFileChanged(event : any) {
    //Select File
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile)
  }

}
