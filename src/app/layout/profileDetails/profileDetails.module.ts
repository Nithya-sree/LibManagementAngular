import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileDetailsRoutingModule } from './profileDetails-routing.module';
import { ProfileDetailsComponent } from './profileDetails.component';
import { PageHeaderModule } from './../../shared';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';

@NgModule({
    imports: [CommonModule, ProfileDetailsRoutingModule, PageHeaderModule, FormsModule, ReactiveFormsModule],
    declarations: [ProfileDetailsComponent],
    providers: [UserService]
})
export class ProfileDetailsModule {}
