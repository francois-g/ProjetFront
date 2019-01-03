import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Badge} from '../observables/models/badge';
import {BadgeApiService} from './services/badge-api.service';

@Component({
  selector: 'app-versus',
  templateUrl: './versus.component.html',
  styleUrls: ['./versus.component.css']
})
export class VersusComponent implements OnInit {

    private _question: string;
    private _answer: number;
    private _badges$: Observable<Badge[]>;
    private _badges: Badge[];

    get question(): string {
        return this._question;
    }

    set question(value: string) {
        this._question = value;
    }

    get answer(): number {
        return this._answer;
    }

    set answer(value: number) {
        this._answer = value;
    }

    get badges$(): Observable<Badge[]> {
        return this._badges$;
    }

    set badges$(value: Observable<Badge[]>) {
        this._badges$ = value;
    }

    get badges(): Badge[] {
        return this._badges;
    }

    set badges(value: Badge[]) {
        this._badges = value;
    }

    constructor(private service: BadgeApiService) { }

    ngOnInit() {
        this.badges$ = this.service.getAll();
        this.badges$.subscribe (
            b => {
                console.log(b);
                this.badges = b;
            },
            (err) => {
                console.log('erreur' + err);
            }
        );
    }

    isSelected(element: string): boolean {
        if (element) {
            return true;
        } else {
            return false;
        }
    }

    printFirstAsk() {
        this.question = 'Que voulez-vous manger ?';
        alert(this.question);
    }
}

