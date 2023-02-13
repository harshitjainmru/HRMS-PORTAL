import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ABS_LAYOUT_DIRECTORY, ABS_LAYOUT_ENTREPRENURSHIP, ABS_LAYOUT_HOME, ABS_LAYOUT_MYPROFILE } from 'src/app/constants/absolute-routes';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: ABS_LAYOUT_HOME.fullUrl, pathMatch: 'full' },
      {
        path: ABS_LAYOUT_HOME.path,
        loadChildren: () =>
          import('./modules/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: ABS_LAYOUT_MYPROFILE.path,
        loadChildren: () =>
          import('./modules/my-profile/my-profile.module').then((m) => m.MyProfileModule),
      },
      {
        path: ABS_LAYOUT_DIRECTORY.path,
        loadChildren: () =>
          import('./modules/directory/directory.module').then((m) => m.DirectoryModule),
      },
      {
        path: ABS_LAYOUT_ENTREPRENURSHIP.path,
        loadChildren: () =>
          import('./modules/entreprenurship/entreprenurship.module').then((m) => m.EntreprenurshipModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}