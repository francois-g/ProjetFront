import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import { VersusComponent } from './components/versus/versus.component';
import { ObservablesComponent } from './components/observables/observables.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        VersusComponent,
        ObservablesComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AngularFontAwesomeModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
