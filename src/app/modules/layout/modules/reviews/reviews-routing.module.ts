import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ABS_LAYOUT_MY_PERFORMANCE } from 'src/app/constants/absolute-routes';
import { ReviewsComponent } from './reviews.component';

const routes: Routes = [
  {path:'',component:ReviewsComponent,children:[
    {
      path:ABS_LAYOUT_MY_PERFORMANCE.path,
      loadChildren:() =>
      import('./my-performance/my-performance.module').then((m)=>m.MyPerformanceModule)
    },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReviewsRoutingModule { }
