import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import { HeaderComponent } from './layout-components/header/header.component';
import { SidenavComponent } from './layout-components/sidenav/sidenav.component';
import {MatListModule} from '@angular/material/list';
import { ListItemComponent } from './layout-components/sidenav/list-item/list-item.component';
import { FooterComponent } from './layout-components/footer/footer.component';
@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    SidenavComponent,
    ListItemComponent,
    FooterComponent,

  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule


  ]
})
export class LayoutModule { }