import { Component, OnInit } from '@angular/core';
import {User} from '../observables/models/user';
import {UserApiService} from '../observables/services/user-api.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  private _users: User[] = null;
  get users(): User[] {
    return this._users;
  }

  set users(value: User[]) {
    this._users = value;
  }

  constructor(private service: UserApiService) { }

  ngOnInit() {
    this.service.getAll().subscribe(users => {
      this._users = users;
    });
  }

}
