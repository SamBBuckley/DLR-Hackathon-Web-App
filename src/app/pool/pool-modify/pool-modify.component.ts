import {Component, Input, OnInit} from '@angular/core';
import {Pool} from '../pool.model';
import {MatDialog} from '@angular/material';
import {PoolUpdateFormComponent} from '../pool-update-form/pool-update-form.component';

@Component({
  selector: 'app-pool-modify',
  templateUrl: './pool-modify.component.html',
  styleUrls: ['./pool-modify.component.css']
})
export class PoolModifyComponent implements OnInit {

  @Input() pool: Pool;

  private dialogRef: any;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    this.dialogRef = this.dialog.open(PoolUpdateFormComponent, {
      width: '700px',
      data: {
        pool: this.pool,
        closeDialog: this.closeDialog()
      }
    });
    this.dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed!');
    });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

}
