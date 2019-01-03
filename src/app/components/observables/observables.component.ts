import { Component, OnInit } from '@angular/core';
import { Question } from './models/question';
import { Observable } from 'rxjs';
import {UserApiService} from './services/user-api.service';
import {User} from './models/user';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {

    private _question: Observable<Question[]>;
    private _users$: Observable<User[]>;
    private _users: User[];
    private _userOne: User[];

    get question(): Observable<Question[]> {
        return this._question;
    }

    set question(value: Observable<Question[]>) {
        this._question = value;
    }

    get users$(): Observable<User[]> {
        return this._users$;
    }

    set users$(value: Observable<User[]>) {
        this._users$ = value;
    }

    get users(): User[] {
        return this._users;
    }

    set users(value: User[]) {
        this._users = value;
    }

    get userOne(): User[] {
        return this._userOne;
    }

    set userOne(value: User[]) {
        this._userOne = value;
    }

    constructor(private service: UserApiService) { }

    ngOnInit() {
        this.users$ = this.service.getAll();
        this.users$.subscribe (
            u => {
                console.log(u);
                this.users = u;
            },
            (err) => {
                console.log('erreur' + err);
            }
        );
    }

    changeURLtoShow(value: number) {
        this.users$ = this.service.getOne(value);
        this.users$.subscribe(
            u => {
                console.log(u);
                this.userOne = u;
            }
        );
    }

}
