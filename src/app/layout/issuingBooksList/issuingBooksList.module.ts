import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IssuingBooksListRoutingModule } from './issuingBooksList-routing.module';
import { IssuingBooksListComponent } from './issuingBooksList.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, IssuingBooksListRoutingModule, PageHeaderModule],
    declarations: [IssuingBooksListComponent]
})
export class IssuingBooksListModule {}
