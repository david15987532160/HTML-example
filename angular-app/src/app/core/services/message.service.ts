import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MessageService {
    private message: string[] = [];
    private title = new Subject();
    // private title = '';

    title$ = this.title.asObservable();

    addTitle(title: string) {
        this.title.next(title);
    }

    //
    // getTitle(): string {
    //     return this.title;
    // }

    add(message: string) {
        this.message.push(message);
    }

    deleteAllMessages() {
        this.message = [];
    }

    constructor() {
    }
}
