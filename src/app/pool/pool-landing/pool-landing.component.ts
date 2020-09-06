import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Pool} from '../pool.model';
import {Subscription} from 'rxjs';
import {PoolService} from '../pool.service';

@Component({
  selector: 'app-pool-landing',
  templateUrl: './pool-landing.component.html',
  styleUrls: ['./pool-landing.component.css']
})
export class PoolLandingComponent implements OnInit, OnDestroy {

  @Input() pools: Pool[];
  private poolsSub: Subscription;

  constructor(public poolService: PoolService) { }

  ngOnInit(): void {
    this.poolService.getPools();
    this.poolsSub = this.poolService.getPoolsUpdateListener().subscribe((pools: Pool[]) => {
      this.pools = pools;
    });
  }

  ngOnDestroy() {
    this.poolsSub.unsubscribe();
  }

}
