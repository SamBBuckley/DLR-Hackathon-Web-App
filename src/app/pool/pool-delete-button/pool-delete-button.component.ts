import {Component, Input, OnInit} from '@angular/core';
import {Pool} from '../pool.model';

import { faTrash } from '@fortawesome/free-solid-svg-icons';
import {PoolService} from '../pool.service';

@Component({
  selector: 'app-pool-delete-button',
  templateUrl: './pool-delete-button.component.html',
  styleUrls: ['./pool-delete-button.component.css']
})
export class PoolDeleteButtonComponent implements OnInit {

  @Input() pool: Pool;

  canIcon = faTrash;

  constructor(public poolService: PoolService) { }

  ngOnInit() {
  }

  onClick() {
    this.poolService.deletePool(this.pool.id);
  }

}
