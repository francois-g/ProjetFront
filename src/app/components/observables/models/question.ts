export class Question {

    constructor(
        private _id: number,
        private _intitule: string,
        private _badgeID: number,
        private _reponseID: number
    ) {}

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get intitule(): string {
        return this._intitule;
    }

    set intitule(value: string) {
        this._intitule = value;
    }

    get badgeID(): number {
        return this._badgeID;
    }

    set badgeID(value: number) {
        this._badgeID = value;
    }

    get reponseID(): number {
        return this._reponseID;
    }

    set reponseID(value: number) {
        this._reponseID = value;
    }

}
