import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-questions',
    templateUrl: './questions.component.html',
    styleUrls: ['./questions.component.css']
})

export class QuestionsComponent implements OnInit {

    private responses;
    private questionID: number;
    private questionIntitule: string;
    private question;
    private compteurQuestion = 0;
    private questions = new Array(
        {
            id: 1,
            intitule: 'Quelle est la difference entre les fonctions require() et include()?',
            badgeId: 1,
            reponse: {
                id: 2,
                contenu: 'They both include a specific file but on require the process exits with a fatal error if the file can\'t be included, while include statement may still pass and jump to the next step in the execution.'
            },

            mauvaisesReponses: [
                {
                    id: 6,
                    contenu: 'Include est plus rapide'
                },
                {
                    id: 7,
                    contenu: 'Require est plus joli'
                },
                {
                    id: 8,
                    contenu: 'Require est requis quand include n\'est pas inclus.'
                }
            ]
        },
        {
            id: 2,
            intitule: 'Quelle est la difference entre GET et POST?',
            badgeId: 1,
            reponse: {
                id: 1,
                contenu: 'Get montre les donnees dans l\'url alors que Post ne les montre pas.'
            },
            mauvaisesReponses: [
                {
                    id: 3,
                    contenu: 'Elles s\'écrivent differement.'
                },
                {
                    id: 4,
                    contenu: 'D, la réponse D.'
                },
                {
                    id: 5,
                    contenu: 'Post est reserve aux facteurs'
                }
            ]
        }
    );

    constructor() {
    }

    valider() {
        this.compteurQuestion++;
        this.genererQuestion();
    }

    genererQuestion() {
        this.questionIntitule = this.question[this.compteurQuestion].intitule;
        this.questionID = this.question[this.compteurQuestion].id;
        this.responses = new Array(this.questions[this.compteurQuestion].reponse.contenu,
            this.questions[this.compteurQuestion].mauvaisesReponses[0].contenu,
            this.questions[this.compteurQuestion].mauvaisesReponses[1].contenu,

            this.questions[this.compteurQuestion].mauvaisesReponses[2].contenu);
        this.responses = this.shuffling(this.responses);
        console.log(this.question[this.compteurQuestion].intitule);
    }

    ngOnInit() {
        this.question = this.shuffling(this.questions);
        this.genererQuestion();
    }

    shuffling(array) {
        let currentIndex = array.length, temporaryValue, randomIndex;  // While there remain elements to shuffle...
        while (0 !== currentIndex) {    // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;    // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

}
