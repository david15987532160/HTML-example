import {NgModule, OnDestroy} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {Subject} from 'rxjs';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {AppComponent} from './app.component';
import {HistoryComponent} from './history/history.component';
import {HistoryModule} from './history/history.module';

// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [
        AppComponent,
        HistoryComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FontAwesomeModule,
        HistoryModule,
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
