import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HistoryV2Component} from './pages/history-v2.component';
import {DataViewModule} from 'primeng/dataview';
import {NzPaginationModule} from 'ng-zorro-antd';

const routes: Routes = [{
    path: '',
    component: HistoryV2Component,
}];

@NgModule({
    declarations: [HistoryV2Component],
    imports: [
        CommonModule,
        DataViewModule,
        NzPaginationModule,
        RouterModule.forChild(routes),
    ]
})
export class HistoryV2Module {
}
