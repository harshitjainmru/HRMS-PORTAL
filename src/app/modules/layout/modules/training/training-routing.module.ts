import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ABS_LAYOUT_UPCOMING_TRAININGS } from 'src/app/constants/absolute-routes';
import { TrainingComponent } from './training.component';

const routes: Routes = [
  {
    path: '',
    component: TrainingComponent,
    children: [
      {
        path: ABS_LAYOUT_UPCOMING_TRAININGS.path,
        loadChildren: () =>
          import('./upcoming-trainings/upcoming-trainings.module').then(
            (m) => m.UpcomingTrainingsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingRoutingModule { }
