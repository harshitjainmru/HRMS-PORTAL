import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ABS_LAYOUT_MY_TRAININGS } from 'src/app/constants/absolute-routes';
import { FresherTrainingComponent } from './fresher-training.component';

const routes: Routes = [
  {path:'',component:FresherTrainingComponent,children:[
    {path:ABS_LAYOUT_MY_TRAININGS.path, loadChildren: () =>
      import('./my-training/my-training.module').then((m) => m.MyTrainingModule),}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FresherTrainingRoutingModule { }
