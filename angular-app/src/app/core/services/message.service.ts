import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MessageService {
    private message: string[] = [];
    // private title = new Subject<string>();
    private title = '';

    // title$ = this.title.asObservable();

    addTitle(title: string) {
        // console.log(title);
        this.title = title;
    }

    getTitle(): string {
        return this.title;
    }

    add(message: string) {
        this.message.push(message);
    }

    deleteAllMessages() {
        this.message = [];
    }

    constructor() {
    }
}
