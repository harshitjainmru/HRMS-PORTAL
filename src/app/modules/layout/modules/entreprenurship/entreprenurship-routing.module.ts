import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ABS_LAYOUT_EXPLORE } from 'src/app/constants/absolute-routes';
import { EntreprenurshipComponent } from './entreprenurship.component';

const routes: Routes = [
  {path:'',component:EntreprenurshipComponent,pathMatch:'full'},
  ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntreprenurshipRoutingModule { }
