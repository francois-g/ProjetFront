import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Badge} from '../observables/models/badge';
import {BadgeApiService} from './services/badge-api.service';
import {Question} from '../observables/models/question';
import {FormBuilder, FormGroup} from '@angular/forms';
import {forEachComment} from 'tslint';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-versus',
  templateUrl: './versus.component.html',
  styleUrls: ['./versus.component.css']
})
export class VersusComponent implements OnInit {

    private _questions$: Observable<Question[]>;
    private _questions: Question[];
    private _badges$: Observable<Badge[]>;
    private _badges: Badge[];
    private _myBadgeForm: FormGroup;

    get questions$(): Observable<Question[]> {
        return this._questions$;
    }

    set questions$(value: Observable<Question[]>) {
        this._questions$ = value;
    }

    get questions(): Question[] {
        return this._questions;
    }

    set questions(value: Question[]) {
        this._questions = value;
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

    get myBadgeForm(): FormGroup {
        return this._myBadgeForm;
    }

    set myBadgeForm(value: FormGroup) {
        this._myBadgeForm = value;
    }

    constructor(private service: BadgeApiService, private builder: FormBuilder) {}

    ngOnInit() {
        this.badges$ = this.service.getAll();
        this.badges$.subscribe (
            b => {
                console.log(b);
                this.badges = b;
                b.forEach(function(b){
                    let objectBadge: object = {
                        id: b.id,
                        name: b.name,
                    };
                    this.myBadgeForm = this.builder.group({
                        'id': [b.id, []],
                        'name': [b.name, []]
                    });
                });
            },
            (err) => {
                console.log('erreur' + err);
            }
        );
    }

    selectedBadges(form: FormGroup) {
        this.questions$ = this.service.getQuestionByBadge(dude);
        this.questions$.subscribe (
            q => {
                console.log(q);
                this.questions = q;
            },
            (err) => {
                console.log('Erreur vilaine' + err);
            }
        );
    }
}

