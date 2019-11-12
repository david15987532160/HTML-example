import {Component, OnInit} from '@angular/core';
import {MessageService} from './core/services/message.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [MessageService],
})
export class AppComponent implements OnInit {
    title = 'API call test';
    display = false;

    constructor(
        private router: Router,
        private messageService: MessageService) {
    }

    test() {
        // console.log(this.title);
        this.messageService.addTitle(this.title);
        this.router.navigateByUrl('/history');
    }

    ngOnInit(): void {

    }

    showDialog() {
        this.display = true;
    }

}
