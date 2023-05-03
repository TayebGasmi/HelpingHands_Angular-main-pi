import {Component, OnInit} from '@angular/core';
import {Reclamation} from "../models/Reclamation";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {AddReclamationComponent} from "../reclamation/add-reclamation/add-reclamation.component";
import {ReclamationService} from "../services/reclamation.service";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-admin-reclamation',
  templateUrl: './admin-reclamation.component.html',
  styleUrls: ['./admin-reclamation.component.css']
})
export class AdminReclamationComponent implements OnInit {
  reclamations: Reclamation[] = []
  pageSize = 10;
  pageIndex = 0;
  private dialogRef: MatDialogRef<AddReclamationComponent>;
  searchText: string="";

  constructor(private reclamationService: ReclamationService, private dialog: MatDialog,) {
  }

  ngOnInit(): void {
    this.getReclamations()

  }

  openAddForm() {
    this.dialogRef = this.dialog.open(AddReclamationComponent, {
    });
    this.dialogRef.afterClosed().subscribe(result => {
      this.reclamationService.getReclamations().subscribe(data => {
        this.reclamations = data
      })
    });
  }


  getReclamations() {
    this.reclamationService.getReclamations().subscribe(data => {
      this.reclamations = data
    })
  }

  handlePageEvent($event: PageEvent) {
    this.pageIndex = $event.pageIndex;
    this.pageSize = $event.pageSize;
  }

  getReclamationList() {
    if (this.searchText != "") {
      return this.reclamations.filter((category) => {
        return category.title.toLocaleLowerCase().match(this.searchText.toLocaleLowerCase())
      }).slice(this.pageIndex * this.pageSize, this.pageIndex * this.pageSize + this.pageSize);
    }
    return this.reclamations.slice(this.pageIndex * this.pageSize, this.pageIndex * this.pageSize + this.pageSize);
  }

}

