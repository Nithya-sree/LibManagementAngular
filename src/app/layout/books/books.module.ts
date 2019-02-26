import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { PageHeaderModule } from './../../shared';
import { MatFormFieldModule, MatPaginatorModule, MatButtonModule, MatIconModule, MatTableModule, MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { BookService } from 'src/app/shared/services/book.service';

@NgModule({
    imports: [CommonModule, BooksRoutingModule, PageHeaderModule,
        FormsModule, MatPaginatorModule, MatButtonModule,
        NgbAlertModule, MatIconModule, MatTableModule, MatFormFieldModule, MatInputModule, ],
    declarations: [BooksComponent],
    providers:[BookService]
})
export class BooksModule {}
