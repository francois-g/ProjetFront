import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-versus',
  templateUrl: './versus.component.html',
  styleUrls: ['./versus.component.css']
})
export class VersusComponent implements OnInit {

    private _question: string;
    private _answer: number;

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

    constructor() { }

    ngOnInit() {
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

