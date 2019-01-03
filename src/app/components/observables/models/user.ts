export class User {
    constructor(
        private _id: number,
        private _pseudo: string,
        private _level: number
    ) {}

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get pseudo(): string {
        return this._pseudo;
    }

    set pseudo(value: string) {
        this._pseudo = value;
    }

    get level(): number {
        return this._level;
    }

    set level(value: number) {
        this._level = value;
    }
}
