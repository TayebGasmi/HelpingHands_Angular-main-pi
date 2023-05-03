import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Reclamation} from "../models/Reclamation";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {UpdateReclamationComponent} from "../reclamation/update-reclamation/update-reclamation.component";
import {DeleteReclamationComponent} from "../reclamation/delete-reclamation/delete-reclamation.component";
import {ReclamationService} from "../services/reclamation.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-card-reclamation-admin',
  templateUrl: './card-reclamation-admin.component.html',
  styleUrls: ['./card-reclamation-admin.component.css']
})
export class CardReclamationAdminComponent implements OnInit {
  @Input()
  reclamation: Reclamation;
  @Output()
  updateList: EventEmitter<void> = new EventEmitter();

  constructor(private reclamationService: ReclamationService, private toastr: ToastrService) {
  }

  ngOnInit(): void {
  }
  showToasterSuccess(){
    this.toastr.success('Reclamation accepted');
  }
  showToasterError(){
    this.toastr.error('Reclamation rejected');
  }

  accept() {
   this.reclamationService.acceptReclamation(this.reclamation.id).subscribe(data=>{
     this.showToasterSuccess();
     this.updateList.emit() ;
    })
   }


  reject() {
    this.reclamationService.rejectReclamation(this.reclamation.id).subscribe(data=>{
      this.updateList.emit() ;
      this.showToasterError();
    })
  }
}
