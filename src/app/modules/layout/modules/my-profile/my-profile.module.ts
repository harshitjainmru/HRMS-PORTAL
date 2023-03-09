import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProfileRoutingModule } from './my-profile-routing.module';
import { MyProfileComponent } from './my-profile.component';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { BasicInformationComponent } from './basic-information/basic-information.component';
import { ProfilePictureComponent } from './profile-picture/profile-picture.component';
import { QualificationComponent } from './qualification/qualification.component';
import { ShiftComponent } from './shift/shift.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AppraisalComponent } from './appraisal/appraisal.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { DropDownModule } from 'src/app/modules/shared/drop-down/drop-down.module';
@NgModule({
    declarations: [
        MyProfileComponent,
        BasicInformationComponent,
        ProfilePictureComponent,
        QualificationComponent,
        ShiftComponent,
        ChangePasswordComponent,
        AppraisalComponent,
    ],
    imports: [
        CommonModule,
        MyProfileRoutingModule,
        MatCardModule,
        MatTabsModule,
        MatButtonModule,
        ReactiveFormsModule,
        FormsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatAutocompleteModule,
        SharedModule,
        DropDownModule
    ]
})
export class MyProfileModule {}
