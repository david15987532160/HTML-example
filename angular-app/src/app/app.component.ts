import {Component, OnInit} from '@angular/core';
import {MessageService} from './core/services/message.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [MessageService],
})
export class AppComponent implements OnInit {
    title = 'API call test';
    display = false;

    constructor(private messageService: MessageService) {

    }

    test() {
        this.messageService.addTitle(this.title);
    }

    ngOnInit(): void {

    }

    showDialog() {
        this.display = true;
    }

}
