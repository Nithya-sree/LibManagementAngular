import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangePasswordComponent } from './changePassword.component';
import { ChangePasswordRoutingModule } from './changePassword-routing.module';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule,ChangePasswordRoutingModule,PageHeaderModule],
    declarations: [ChangePasswordComponent]
})
export class ChangePasswordModule {}