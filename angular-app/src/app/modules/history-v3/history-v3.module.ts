import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HistoryV3Component} from './pages/history-v3.component';
import {FormsModule} from '@angular/forms';

// import Primeng
import {DataViewModule} from 'primeng/dataview';
import {PanelModule} from 'primeng/panel';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';

const routes: Routes = [{
    path: '',
    component: HistoryV3Component,
}];

@NgModule({
    declarations: [HistoryV3Component],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        DataViewModule,
        PanelModule,
        DialogModule,
        ButtonModule,
        DropdownModule,
    ]
})
export class HistoryV3Module {
}
