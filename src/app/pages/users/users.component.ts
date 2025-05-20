import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-users',
  imports: [SharedModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {
    numberOfRows = Array.from({ length: 10 }, (_, i) => i + 1);
    numberOfColumns = Array.from({ length: 30 }, (_, i) => i + 1);
    selectedRows: boolean[][] = [];
    selectedColumns: boolean[] = [];

    constructor() {}

    ngOnInit() {
    }

    onCheckboxChange(row: number, col: number) {
        console.log('onCheckboxChange', row, col);
    }
}
