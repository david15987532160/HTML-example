import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HistoryV2Component} from './pages/history-v2.component';
import {DataViewModule} from 'primeng/dataview';
import {DataGridModule} from 'primeng/datagrid';
import {PanelModule} from 'primeng/panel';
import {DialogModule} from 'primeng/dialog';
import {TabViewModule} from 'primeng/primeng';

const routes: Routes = [{
    path: '',
    component: HistoryV2Component,
}];

@NgModule({
    declarations: [HistoryV2Component],
    imports: [
        CommonModule,
        DataViewModule,
        // DataGridModule,
        // PanelModule,
        // DialogModule,
        // TabViewModule,
        RouterModule.forChild(routes),
    ]
})
export class HistoryV2Module {
}
