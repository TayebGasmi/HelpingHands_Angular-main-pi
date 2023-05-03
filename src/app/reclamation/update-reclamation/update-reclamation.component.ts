import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {Reclamation} from "../../models/Reclamation";
import {ReclamationService} from "../../services/reclamation.service";
import {CategoryReclamation} from "../../models/CategoryReclamation";
import {CategoryReclamationService} from "../../services/category-reclamation.service";

@Component({
  selector: 'app-update-reclamation',
  templateUrl: './update-reclamation.component.html',
  styleUrls: ['./update-reclamation.component.css']
})
export class UpdateReclamationComponent {
  form: FormGroup
  selectedFile:File=null;
  categories: CategoryReclamation[]=[
  ];
  constructor(
    public dialogRef: MatDialogRef<UpdateReclamationComponent>,
    @Inject(MAT_DIALOG_DATA) public data:
      Reclamation, private formBuilder: FormBuilder, private reclamationService: ReclamationService, private toastr: ToastrService,
    private categoryReclamationService:CategoryReclamationService
  ) {
  }

  showUpdate() {
    this.toastr.warning('!congratulation', 'reclamation category updated successfully!');
  }

  ngOnInit(): void {
    const formControls = {};
    formControls["title"] = [this.data.title, Validators.required];
    formControls["description"] = [this.data.description, Validators.required];
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
      console.log(this.form.value);
      const formData = new FormData()
      formData.append('title', this.form.value.title)
      formData.append('description', this.form.value.description)
      formData.append('id', `${this.data.id}`)
      this.selectedFile && formData.append('file', this.selectedFile)
      console.log(formData.get('file'))
      this.reclamationService.updateReclamation(formData).subscribe(data => {
        this.categories.forEach((category, index) => {
          this.reclamationService.assignReclamationToCategory(data.id,category.id).subscribe(data => {
              console.log(data);
            }
          )

        });
        console.log(data)
        this.showUpdate()
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
