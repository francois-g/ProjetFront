import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Badge} from '../observables/models/badge';
import {BadgeApiService} from './services/badge-api.service';
import {Question} from '../observables/models/question';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-versus',
    templateUrl: './versus.component.html',
    styleUrls: ['./versus.component.css']
})
export class VersusComponent implements OnInit {

    private _questions$: Observable<Question[]>;
    private _questions: Question[];
    private _validate: boolean;
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

    get validate(): boolean {
        return this._validate;
    }

    set validate(value: boolean) {
        this._validate = value;
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

    constructor(private service: BadgeApiService, private builder: FormBuilder) {
    }

    ngOnInit() {
        this.badges$ = this.service.getAll();
        this.badges$.subscribe(
            b => {
                console.log(b);
                this.badges = b;
                let objectBadge: any = {};
                b.forEach(function (b) {
                    // objectBadge['id' + b.id] = [false, []];
                    objectBadge[b.id] = [false, []];
                    // console.log(objectBadge);
                });
                this.myBadgeForm = this.builder.group(objectBadge);
            },
            (err) => {
                console.log('erreur' + err);
            }
        );
        this.validate = false;
    }

    selectedBadges() {
        // console.log(this.myBadgeForm.value);
        let tabB: Array<number> = [];
        for (let v in this.myBadgeForm.value) {
            if (this.myBadgeForm.value[v]) {
                console.log(v);
                tabB.push(parseInt(v));
            }
        }
        console.log(tabB);

        this.questions$ = this.service.getQuestionByBadge(tabB);
        // this.questions$ = this.service.getQuestionByBadge(this.myBadgeForm.controls[]);
        this.questions$.subscribe(
            q => {
                console.log(q);
                this.questions = q;
            },
            (err) => {
                console.log('Erreur vilaine' + err);
            }
        );
        this.validate = true;
    }
}

