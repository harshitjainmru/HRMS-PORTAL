import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ABS_LAYOUT_ENTREPRENURSHIP, ABS_LAYOUT_EXPLORE } from 'src/app/constants/absolute-routes';
import { EntrepreneurshipComponent } from './entrepreneurship.component';

const routes: Routes = [
  {path:'',component:EntrepreneurshipComponent,children:[
    {
      path: ABS_LAYOUT_EXPLORE.path,
      loadChildren: () =>
        import('./explore/explore.module').then((m) => m.ExploreModule),
    },
    {
      path: ABS_LAYOUT_ENTREPRENURSHIP.path,
      loadChildren: () =>
        import('./share-your-idea/share-your-idea.module').then((m) => m.ShareYourIdeaModule),
    },
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntrepreneurshipRoutingModule { }
