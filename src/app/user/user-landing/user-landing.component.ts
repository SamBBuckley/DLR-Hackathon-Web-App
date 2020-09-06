import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Pool} from '../../pool/pool.model';
import {Subscription} from 'rxjs';
import {User} from '../user.model';
import {UserService} from '../user.service';

@Component({
  selector: 'app-user-landing',
  templateUrl: './user-landing.component.html',
  styleUrls: ['./user-landing.component.css']
})
export class UserLandingComponent implements OnInit, OnDestroy {

  @Input() users: User[];
  private usersSub: Subscription;

  constructor(public userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers();
    this.usersSub = this.userService.getUsersUpdateListener().subscribe((users: User[]) => {
      this.users = users;
    });
  }

  ngOnDestroy(): void {
    this.usersSub.unsubscribe();
  }

}
