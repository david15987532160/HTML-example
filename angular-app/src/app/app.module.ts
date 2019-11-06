import {NgModule, OnDestroy} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {Subject} from 'rxjs';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {AppComponent} from './app.component';
import { HistoryV2Component } from './modules/history-v2/history-v2.component';

// import {HistoryModule} from './history/history.module';


@NgModule({
    declarations: [
        AppComponent,
        HistoryV2Component
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        FontAwesomeModule,
        // HistoryModule,
        NgZorroAntdModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule implements OnDestroy {
    private unsubscribeAll = new Subject();

    // tslint:disable-next-line:contextual-lifecycle
    ngOnDestroy(): void {
        this.unsubscribeAll.next();
        this.unsubscribeAll.complete();
    }
}
