import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

    private _url: string = 'http://versus.local/users';

    get url(): string {
        return this._url;
    }

    constructor(private _httpClient: HttpClient) {}

    getAll(): Observable<User[]> {
        return this._httpClient.get<User[]>(this.url);
    }

    getOne(value: number): Observable<User[]> {
        return this._httpClient.get<User[]>(this.url + '/' + value);
    }
}
