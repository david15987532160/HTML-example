import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {NzPaginationModule} from 'ng-zorro-antd/pagination';

import {HistoryComponent} from './pages/history.component';

const routes: Routes = [{
    path: '',
    component: HistoryComponent
}];

@NgModule({
    declarations: [HistoryComponent],
    imports: [
        CommonModule,
        NzPaginationModule,
        RouterModule.forChild(routes)
    ]
})
export class HistoryModule {
}
