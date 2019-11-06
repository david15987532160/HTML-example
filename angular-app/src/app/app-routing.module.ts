import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


const routes: Routes = [
    {
        path: 'history',
        loadChildren: () => import('./modules/history/history.module').then(m => m.HistoryModule),
    },
    {
        path: 'history2',
        loadChildren: () => import('./modules/history-v2/history-v2.module').then(m => m.HistoryV2Module),
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
