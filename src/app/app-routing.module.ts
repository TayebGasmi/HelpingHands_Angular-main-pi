import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ClientComponent} from './client/client.component';
import {ReclamationListComponent} from "./reclamation/reclamation-list/reclamation-list.component";
import {
  ReclamtionCategoryListComponent
} from "./CategoryReclamation/reclamtion-category-list/reclamtion-category-list.component";
import {AdminReclamationComponent} from "./admin-reclamation/admin-reclamation.component";

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },

  {
    path: 'client',
    component: ClientComponent
  }
  , {
    path: 'reclamation',
    component: ReclamationListComponent
  },
  {
    path: 'admin/reclamation',
    component: AdminReclamationComponent
  }
  , {
    path: 'categoryReclamation',
    component: ReclamtionCategoryListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
