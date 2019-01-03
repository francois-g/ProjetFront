import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../components/home/home.component';
import {Route, RouterModule} from '@angular/router';
import {VersusComponent} from '../components/versus/versus.component';
import {Observable} from 'rxjs';
import {ObservablesComponent} from '../components/observables/observables.component';

const routes: Route[] = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'versus',
        component: VersusComponent
    },
    {
        path: 'users',
        component: ObservablesComponent
    }
    // {
    //     path: 'params/:id',
    //     component: ParamUrlComponent
    // },
    // {
    //     path: 'commu',
    //     component: CommunicationPeComponent
    // },
    // {
    //     path: 'shop',
    //     component: ShoppingListComponent
    // }
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule,
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
