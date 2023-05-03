import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ToastrService} from "ngx-toastr";
import {Reclamation} from "../../models/Reclamation";
import {ReclamationService} from "../../services/reclamation.service";

@Component({
  selector: 'app-delete-reclamation',
  templateUrl: './delete-reclamation.component.html',
  styleUrls: ['./delete-reclamation.component.css']
})
export class DeleteReclamationComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteReclamationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Reclamation, private reclamationService: ReclamationService, private toastr: ToastrService
  ) {
  }

  showDelete() {
    this.toastr.error('!congratulation', 'reclamation  delete successfully!');
  }

  ngOnInit(): void {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onDelete() {
    console.log(this.data.id);
    this.reclamationService.deleteReclamation(this.data.id).subscribe(data => {
      console.log(data)
      this.showDelete()
      this.dialogRef.close();
    });
  }
}
