import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import {map} from 'rxjs/operators';

import {Pool} from './pool.model';


@Injectable({providedIn: 'root'})
export class PoolService {

  // tslint:disable-next-line:max-line-length
  private pools: Pool[] = [];
  private poolsUpdated = new Subject<Pool[]>();

  constructor(private http: HttpClient) { }

  getPools() {
    this.http.get<Pool[]>('http://192.168.1.16:3000/api/v1/pools')
      .pipe(
        map(poolData =>  {
          return poolData.map((pool: any) => {
            return {
              id: pool.id,
              name: pool.name,
              lastRoll: pool.lastRoll,
              balance: pool.balance,
              winner: pool.winner,
              users: pool.users,
              chanceToBust: pool.chanceToBust,
              hasBusted: pool.hasBusted,
              isTimed: pool.isTimed,
              dailyCost: pool.dailyCost,
            };
          });
        })
      )
      .subscribe(transformedPools => {
        this.pools = transformedPools;
        this.poolsUpdated.next([...this.pools]);
      });
  }

  getPoolsUpdateListener() {
    return this.poolsUpdated.asObservable();
  }

  getPool(id: string) {
    return {...this.pools.find(p => p.id === id)};
  }

  addPool(pool: Pool) {
    this.http
      .post<{success: boolean, poolId: string}>(
        'http://192.168.1.16:3000/api/v1/pools', pool)
      .subscribe(responseData => {
        pool.id = responseData.poolId;
        this.pools.push(pool);
        this.poolsUpdated.next( [...this.pools] );
      });
  }

  updatePool(pool: Pool) {
    this.http
      .put('http://192.168.1.16:3000/api/v1/pools/' + pool.id, pool)
      .subscribe(response => {
        const updatedPools = this.pools.filter(pool2 => pool2.id !== pool.id);
        updatedPools.push(pool);
        this.pools = updatedPools;
        this.poolsUpdated.next([...this.pools]);
      });
  }

  deletePool(poolId: string) {
    this.http
      .delete('http://192.168.1.16:3000/api/v1/pools/' + poolId)
      .subscribe(() => {
        this.pools = this.pools.filter(pool => pool.id !== poolId);
        this.poolsUpdated.next( [...this.pools] );
      });
  }
}
