import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HistoryV3Component} from './pages/history-v3.component';

const routes: Routes = [{
    path: '',
    component: HistoryV3Component,
}];

@NgModule({
    declarations: [HistoryV3Component],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ]
})
export class HistoryV3Module {
}
