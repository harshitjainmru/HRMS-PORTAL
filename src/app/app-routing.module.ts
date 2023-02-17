import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  ABS_ACCOUNT_LOGIN, ABS_LAYOUT, ACCOUNT,
} from './constants/absolute-routes';

const routes: Routes = [
  { path: '', redirectTo: ACCOUNT.fullUrl, pathMatch: 'full' },
  {
    path: ACCOUNT.fullUrl,
    loadChildren: () =>
      import('./modules/account/account.module').then((m) => m.AccountModule),
  },
  {
    path: ABS_LAYOUT.fullUrl,
    loadChildren: () =>
      import('./modules/layout/layout.module').then((m) => m.LayoutModule),
  },
  // { path: '**', redirectTo:ABS_ACCOUNT_LOGIN.fullUrl , pathMatch: 'full' },
  { path: '**', loadChildren: () => import('./modules/not-found/not-found.module').then(m => m.NotFoundModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
