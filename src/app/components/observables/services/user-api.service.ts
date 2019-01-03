import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

    private _url: string = 'http://versus.local';

    get url(): string {
        return this._url;
    }

    constructor(private httpClient: HttpClient) {}
}
