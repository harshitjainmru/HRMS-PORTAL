import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ABS_LAYOUT_DIRECTORY, ABS_LAYOUT_ENTREPRENURSHIP, ABS_LAYOUT_HOME, ABS_LAYOUT_JOB_OPENING, ABS_LAYOUT_MYPROFILE, ABS_LAYOUT_MY_PERFORMANCE, ABS_LAYOUT_REFER_LIST } from 'src/app/constants/absolute-routes';
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
        path: '',
        loadChildren: () =>
          import('./modules/entrepreneurship/entrepreneurship.module').then((m) => m.EntrepreneurshipModule),
      },
      {
        path:'',
        loadChildren:() =>
        import('./modules/my-links/my-links.module').then((m)=>m.MyLinksModule)
      },
      {
        path:'',
        loadChildren:() =>
        import('./modules/refer-afriend/refer-afriend.module').then((m)=>m.ReferAFriendModule)

      },
      {
        path:ABS_LAYOUT_MY_PERFORMANCE.path,
        loadChildren:() =>
        import('./modules/reviews/my-performance/my-performance.module').then((m)=>m.MyPerformanceModule)
      },
      {
        path:'',
        loadChildren:() =>
        import('./modules/recruitment/recruitment.module').then((m)=>m.RecruitmentModule)
      }

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
