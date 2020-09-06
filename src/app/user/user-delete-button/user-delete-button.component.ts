import {Component, Input, OnInit} from '@angular/core';

import { faTrash } from '@fortawesome/free-solid-svg-icons';
import {User} from '../user.model';
import {UserService} from '../user.service';

@Component({
  selector: 'app-user-delete-button',
  templateUrl: './user-delete-button.component.html',
  styleUrls: ['./user-delete-button.component.css']
})



export class UserDeleteButtonComponent implements OnInit {

  @Input() user: User;

  canIcon = faTrash;

  constructor(public userService: UserService) { }

  ngOnInit() {
  }

  onClick() {
    this.userService.deletePool(this.user.id);
  }

}
