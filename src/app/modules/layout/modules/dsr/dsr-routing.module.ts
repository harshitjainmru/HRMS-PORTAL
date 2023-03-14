import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ABS_LAYOUT_DSR } from 'src/app/constants/absolute-routes';
import { DsrComponent } from './dsr.component';

const routes: Routes = [
  {path:'',component:DsrComponent,children:[
    {
      path: ABS_LAYOUT_DSR.path,
      loadChildren: () =>
        import('./my-dsr/my-dsr.module').then((m) => m.MyDsrModule),
    },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DsrRoutingModule { }
