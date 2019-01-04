import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Badge} from '../../observables/models/badge';
import {Question} from '../../observables/models/question';

@Injectable({
  providedIn: 'root'
})
export class BadgeApiService {

    private _url = 'http://versus.local/badges';

    get url(): string {
        return this._url;
    }

    constructor(private _httpClient: HttpClient) {}

    getAll(): Observable<Badge[]> {
        return this._httpClient.get<Badge[]>(this.url);
    }

    getQuestionByBadge(tab: Array<number>): Observable<Question[]> {
        let params = new HttpParams();
        tab.forEach(function(e, f) {
            params = params.append(f.toString(), e.toString());
        });
        return this._httpClient.post<Question[]>(this.url + '/questions', params);
    }
}
