import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DashboardModule} from './dashboard/dashboard.module';
import {ClientModule} from './client/client.module';
import {ReclamationListComponent} from './reclamation/reclamation-list/reclamation-list.component';
import {
  ReclamtionCategoryListComponent
} from './CategoryReclamation/reclamtion-category-list/reclamtion-category-list.component';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  AddCategoryReclamationFormComponent
} from './CategoryReclamation/add-category-reclamtion-form/add-category-reclamation-form.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {ToastrModule} from 'ngx-toastr';
import {
  DeleteCategoryReclamationComponent
} from './CategoryReclamation/delete-category-reclamation/delete-category-reclamation.component';
import {
  UpdateCategoryReclamationComponent
} from './CategoryReclamation/update-category-reclamation/update-category-reclamation.component';
import {
  CategoryReclamationCardComponent
} from './CategoryReclamation/category-reclamation-card/category-reclamation-card.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {ReclamationCardComponent} from './reclamation/reclamation-card/reclamation-card.component';
import {DeleteReclamationComponent} from './reclamation/delete-reclamation/delete-reclamation.component';
import {UpdateReclamationComponent} from './reclamation/update-reclamation/update-reclamation.component';
import {AddReclamationComponent} from './reclamation/add-reclamation/add-reclamation.component';
import { AdminReclamationComponent } from './admin-reclamation/admin-reclamation.component';
import { CardReclamationAdminComponent } from './card-reclamation-admin/card-reclamation-admin.component';
import {MatSelectModule} from '@angular/material/select';
import { ReclamationDetailsComponent } from './reclamation/reclamation-details/reclamation-details.component';

const materialModules = [
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatPaginatorModule,
  MatSelectModule
];

@NgModule({
  declarations: [
    AppComponent,
    ReclamationListComponent,
    ReclamtionCategoryListComponent,
    AddCategoryReclamationFormComponent,
    DeleteCategoryReclamationComponent,
    UpdateCategoryReclamationComponent,
    CategoryReclamationCardComponent,
    ReclamationCardComponent,
    DeleteReclamationComponent,
    UpdateReclamationComponent,
    AddReclamationComponent,
    AdminReclamationComponent,
    CardReclamationAdminComponent,
    ReclamationDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    ClientModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ...materialModules,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),

  ], providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
