import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import { VersusComponent } from './components/versus/versus.component';
import { ObservablesComponent } from './components/observables/observables.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { QuestionsComponent } from './components/questions/questions.component';
import {RankingComponent} from './components/ranking/ranking.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        VersusComponent,
        ObservablesComponent,
        QuestionsComponent,
        RankingComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AngularFontAwesomeModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
