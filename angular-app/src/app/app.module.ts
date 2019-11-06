import {NgModule, OnDestroy} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {Subject} from 'rxjs';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {AppComponent} from './app.component';
import {PanelModule} from 'primeng/panel';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        FontAwesomeModule,
        NgZorroAntdModule,
        PanelModule,
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
