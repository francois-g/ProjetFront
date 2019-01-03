import { Component, OnInit } from '@angular/core';
import { Question } from './models/question';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {

    private question: Observable<Question[]>;

    constructor() { }

    ngOnInit() {
    }

}
