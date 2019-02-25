import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, BooksRoutingModule, PageHeaderModule],
    declarations: [BooksComponent]
})
export class BooksModule {}
