export class Question {

    constructor(
        private _idQuestion: number,
        private _titleQuestion: string,
        private _correct: string,
        private _incorrect: []
    ) {}

    get idQuestion(): number {
        return this._idQuestion;
    }

    set idQuestion(value: number) {
        this._idQuestion = value;
    }

    get titleQuestion(): string {
        return this._titleQuestion;
    }

    set titleQuestion(value: string) {
        this._titleQuestion = value;
    }

    get correct(): string {
        return this._correct;
    }

    set correct(value: string) {
        this._correct = value;
    }

    get incorrect(): [] {
        return this._incorrect;
    }

    set incorrect(value: []) {
        this._incorrect = value;
    }

}
