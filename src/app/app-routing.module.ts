import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinkComponent } from "./link/link.component";

const routes: Routes = [
  { path: '', redirectTo: '/link', pathMatch: 'full'}
  { path: 'link', component: LinkComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ], 
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
