import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HistoryComponent} from './history/history.component';


const routes: Routes = [
    {
        path: 'history',
        component: HistoryComponent,
        data: { title: 'Image list' },
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
