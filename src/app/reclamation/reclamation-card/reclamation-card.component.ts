import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ReclamationService} from "../../services/reclamation.service";
import {Reclamation} from "../../models/Reclamation";
import {UpdateReclamationComponent} from "../update-reclamation/update-reclamation.component";
import {DeleteReclamationComponent} from "../delete-reclamation/delete-reclamation.component";

@Component({
  selector: 'app-reclamation-card',
  templateUrl: './reclamation-card.component.html',
  styleUrls: ['./reclamation-card.component.css']
})
export class ReclamationCardComponent implements OnInit {
  @Input()
  reclamation: Reclamation;
  @Output()
  updateList: EventEmitter<void> = new EventEmitter();
  private dialogRef: MatDialogRef<UpdateReclamationComponent>;
  private dialogRefDelete: MatDialogRef<DeleteReclamationComponent>;

  constructor(private reclamationService: ReclamationService, private dialog: MatDialog,) {
  }

  ngOnInit(): void {
  }

  openUpdateForm() {
    this.dialogRef = this.dialog.open(UpdateReclamationComponent, {
      data: this.reclamation,
    });
    this.dialogRef.afterClosed().subscribe(result => {
      this.reclamationService.getReclamations().subscribe(data => {
        this.updateList.emit();
      })
    });
  }

  openDeleteForm() {
    this.dialogRefDelete = this.dialog.open(DeleteReclamationComponent, {
      data: this.reclamation,
      height: '400px',
      width: '600px',
    });
    this.dialogRefDelete.afterClosed().subscribe(result => {
      this.reclamationService.getReclamations().subscribe(data => {
        this.updateList.emit();
      })
    });
  }
}
